import React, {createContext, FC, MouseEventHandler, PropsWithChildren, useContext, useEffect, useState} from 'react';
import { IPost } from '../components/ListPosts/RenderPostCard/RenderPostCard';
import { Routes } from '../constants/Routes';
import searchServices, { ISearchResults } from '../services/searchServices';
import { handleProtocolChange } from '../utils/urlUtil';


const PaginationContext = createContext<PaginationContextValue | null>(null);

export interface PaginationProps {
    count: number
    offset: number
    next: string | null
    previous: string | null
}

interface PaginationContextValue {
    activePage: number
    pageResults: IPost[]
    pageNumbers: number[]
    paginationData: PaginationProps
    handleSetPageLimit: (limit: number) => void
    handleChangePage: MouseEventHandler<HTMLButtonElement>
    handleSetActivePage: MouseEventHandler<HTMLSpanElement>
    handleGetPaginationParams: (callback: () => Promise<ISearchResults>) => void
}

export enum PaginationRoutes {
    next = "next",
    prev = "prev"
}

export const initialPaginationState: PaginationProps = {
    count: 0,
    offset: 1,
    next: null,
    previous: null
};

const PaginationProvider: FC<PropsWithChildren> = ({children}) => {

    const [activePage, setActivePage] = useState(0);
    const [pageResults, setPageResults] = useState<IPost[]>([]);
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    const [paginationData, setPaginationData] = useState<PaginationProps>(initialPaginationState);
    const [pageLimit, setPageLimit] = useState<number>(6);

    const handleSetPageLimit = (limit: number) => setPageLimit(limit);

    const getCurrentOffset = (next: string | null, previous: string | null): number => {
        let result = 1;

        if (!!next) {
            const offset = parseInt(String(next).split("offset=")[1]) - pageLimit
            result = !isNaN(offset) ? offset : 1
        } else if (!!previous) {
            const offset = parseInt(String(previous).split("offset=")[1]) + pageLimit
            result = !isNaN(offset) ? offset : 0
        }

        return result
    };

    const countPages = (count: number): number => Math.ceil(count / pageLimit);

    const getCurrentPageNumber = (offset: number) => {
        return Math.ceil((offset + 1) / pageLimit);
    }

    const handleGetSearchPage = (url: string) => searchServices.getSearchPage.bind(null, url);

    const handleSetActivePage: MouseEventHandler<HTMLSpanElement> = async (event) => {
        const {previous, next} = paginationData;
        const id = (event.target as HTMLElement).dataset.id;

        const url = new URL(handleProtocolChange(!!next ? next : !!previous ? previous : ""));
        url.searchParams.set("offset", String(Number(id) * pageLimit));

        await handleGetPaginationParams(handleGetSearchPage(url.href))
    }

    const handleGetPaginationParams = async (callback: () => Promise<ISearchResults>) => {
        const {count, next, previous, results} = await callback();

        setPaginationData({
            count,
            next,
            previous,
            offset: Math.abs(getCurrentOffset(next, previous))
        });

        setPageResults(results);
        setPageNumbers(getAllPages(countPages(count)));
    };

    const handleChangePage: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const route = (event.currentTarget as HTMLButtonElement).dataset.route;

        const httpsURL = handleProtocolChange((route === PaginationRoutes.prev ? paginationData.previous : paginationData.next) || "");

        await handleGetPaginationParams(handleGetSearchPage(httpsURL || ""));
    }

    const getAllPages = (pagesCount: number) => {
        const result: number[] = [];

        for (let i = 1; i <= pagesCount; i++) {
            result.push(i)
        }

        return result
    };

    useEffect(() => {
        setPageNumbers(getAllPages(countPages(paginationData.count)))
        setActivePage(getCurrentPageNumber(paginationData.offset))
    }, [paginationData])

    useEffect(() => {
        const pathname = window.location.pathname;

        if (pathname === Routes.blog) {
            activePage === 1 ? setPageLimit(11) : setPageLimit(11)
        } else {
            setPageLimit(6)
        }
    }, [window.location.pathname, activePage])

    return (
        <PaginationContext.Provider value={{
            activePage,
            pageResults,
            pageNumbers,
            paginationData,
            handleSetPageLimit,
            handleChangePage,
            handleSetActivePage,
            handleGetPaginationParams,
        }}>
            {children}
        </PaginationContext.Provider>
    );
};

function usePagination() {
    const context = useContext(PaginationContext);

    if (context === null) {
        throw new Error("usePagination must be used with PaginationProvider")
    }

    return context
}

export {usePagination, PaginationProvider};