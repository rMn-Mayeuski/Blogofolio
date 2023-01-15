import React, {createContext, FC, MouseEventHandler, PropsWithChildren, useContext, useEffect, useState} from 'react';
import {handleProtocolChange} from "../utils/urlUtil";
import { Routes } from '../constants/Routes';
import searchServices, { ISearchResults } from '../services/searchServices';
import { IPost } from '../components/ListPosts/RenderPostCard/RenderPostCard';

const PaginationContext = createContext<PaginationContextValue | null>(null)

export interface PaginationProps {
    count: number,
    offset: number
    next: string | null,
    previous: string | null,
}

interface PaginationContextValue {
    activePage: number,
    pageResults: IPost[],
    pageNumbers: number[],
    paginationData: PaginationProps,
    handleChangePage: MouseEventHandler<HTMLButtonElement>,
    handleSetActivePage: MouseEventHandler<HTMLButtonElement>,
    handleGetPaginationParams: (callback: () => Promise<ISearchResults>) => void,
    pageLimit: number
}

export enum PaginationRoutes {
    next = "next",
    prev = "prev"
}

export const initialPaginationState: PaginationProps = {
    count: 0,
    next: null,
    previous: null,
    offset: 1,
}

const PaginationProvider: FC<PropsWithChildren> = ({ children }) =>  {
    const [activePage, setActivePage] = useState(1);
    const [pageResults, setPageResults] = useState<IPost[]>([]);
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    const [paginationData, setPaginationData] = useState<PaginationProps>(initialPaginationState);

    const [pageLimit, setPageLimit] = useState<number>(6);

    const pathname = window.location.pathname
    //Индекс первого элемента на странице OFFSET -  Берём ссылку next или previous, находим в строке офсет и отнимаем лимит,
    // так как она содержит индекс первого элемента на след или пред странице, в противном случае 1
    const getCurrentOffset = (next: string | null, previous: string | null): number => {
        let result = 1
        if (!!next) {
            const offset = parseInt(String(next).split("offset=")[1]) - pageLimit
            result = !isNaN(offset) ? offset : 1
        } else if (!!previous) {
            const offset = parseInt(String(previous).split("offset=")[1]) + pageLimit
            result = !isNaN(offset) ? offset : pageLimit
        }

        return result
    }

    // Общее количество страниц. Делим количество постов на лимит и округляем в большую сторону
    const countPages = (count: number): number => {
        if (pathname === Routes.blog) {
            return Math.ceil(count / 12);
        } else {
            return Math.ceil(count / 6);
        }
    }

    // Получаем массив чисел, сколько страниц, столько чисел
    const getAllPages = (pagesCount: number) => {
        const result: number[] = [];

        for (let i = 1; i <= pagesCount; i++) {
            result.push(i)
        }

        return result
    }

    // Страница, на которой находится пользователь в данный момент.
    // Берём индекс первого элемента и делим на лимит страниц. НО если пользователь находится на 1 странице, то офсет будет равен нулю,
    // при делении получчим бесконечность, поэтому к офсету прибавляем 1. 0+1/6 = 1
    const getCurrentPageNumber = (offset: number) => {
        return Math.ceil((offset + 1) / pageLimit);
    }

    const handleGetSearchPage = (url: string) => searchServices.getSearchPage.bind(null, url);
    // const reversed = handleGetSearchPage.reverse();
    console.log();
    

    // Делаем страницу активной, когда пользователь кликнул на неё.
    const handleSetActivePage: MouseEventHandler<HTMLSpanElement> = async (event) => {
        const { previous, next } = paginationData;
        // У каждой страницы 1,2,3... есть свой id , определяем его при клике
        const id = (event.target as HTMLElement).dataset.id;

        // Формируем новый юрл, чтобы при переходе на нужную страницу отображались посты , меняем на https, берём ссылку
        // и в качестве offset устанавливаем id*лимит постов на странице. То есть, если перешли на 2 страницу, у неё айди 1*6 = 6
        const url = new URL(handleProtocolChange(!!next ? next : !!previous ? previous : ""));

        if (pathname === Routes.blog && Number(id) === pageNumbers.length - 1) {
            url.searchParams.set("offset", String(Number(id) * 12));
        }
        else url.searchParams.set("offset", String(Number(id) * pageLimit));
        // формируем новые параметры страницы, сделав запрос на апи, передав новый урл
        await handleGetPaginationParams(handleGetSearchPage(url.href))
    }

    useEffect(() => {
        if (pathname === Routes.blog) {
            activePage === 1 ? setPageLimit(11) : setPageLimit(12)
        } else {
            setPageLimit(6)
        }
    }, [window.location.pathname, activePage])


    // Передаём колбэк с запросом на сервер, вытягиваем нужные нам параметры
    const handleGetPaginationParams = async (callback: () => Promise<ISearchResults>) => {
        const { count, next, previous, results } = await callback();

        setPaginationData({
            count,
            next,
            previous,
            offset: getCurrentOffset(next, previous),
        });

        setPageResults(results);
        setPageNumbers(getAllPages(countPages(count)))
    }

    // При нажатии на кнопку next / prev , определяем на какой кнопке сработал клик
    const handleChangePage: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const route = (event.currentTarget as HTMLButtonElement).dataset.route;

        const httpsURL = handleProtocolChange((route === PaginationRoutes.prev ? paginationData.previous : paginationData.next) || "")
            // Получаем новые параметры, передавая ссылку на пред или след пост, которая содержится в paginationData
        await handleGetPaginationParams(handleGetSearchPage(httpsURL || ""))
    }

    useEffect(() => {
        setPageNumbers(getAllPages(countPages(paginationData.count)))
        setActivePage(getCurrentPageNumber(paginationData.offset))
    }, [paginationData])

    return (
        <PaginationContext.Provider value={{
            activePage,
            pageResults,
            pageNumbers,
            paginationData,
            pageLimit,
            handleChangePage,
            handleSetActivePage,
            handleGetPaginationParams,
        }}>
            {children}
        </PaginationContext.Provider>
    )
}

function usePagination() {
    const context = useContext(PaginationContext);
    if (context === null) {
        throw new Error("usePagination must be used with PaginationProvider")
    }

    return context
}

export {usePagination, PaginationProvider}