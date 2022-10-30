import React, {createContext, FC, MouseEventHandler, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import { IPost } from '../components/ListPosts/RenderPostCard/RenderPostCard';
import { handleProtocolChange } from '../utils/urlUtil';
import searchServices, { ISearchResults } from "../services/searchServices"

type WithChildren = {
    children: ReactNode
}

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
    handleSetActivePage: MouseEventHandler<HTMLSpanElement>,
    handleGetPaginationParams: (callback: () => Promise<ISearchResults>) => void,
}

export enum PaginationRoutes {
    next = "next",
    prev = "prev"
}

export const initialPaginationState: PaginationProps = {
    count: 0,
    next: null,
    previous: null,
    offset: 1
}

const PaginationProvider: FC<WithChildren> = ({ children }) =>  {
    const [activePage, setActivePage] = useState(0);
    const [pageResults, setPageResults] = useState<IPost[]>([]);
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    const [paginationData, setPaginationData] = useState<PaginationProps>(initialPaginationState);

    const getCurrentOffset = (next: string | null, previous: string | null): number => {
        // parseInt(String(!!next ? next : !!previous ? previous : "0").split("offset=")[1])
        if (!!next) {
            return parseInt(String(next).split("offset=")[1]) - 6
        } else if (!!previous) {
            return parseInt(String(previous).split("offset=")[1]) + 6
        } else {
            return 1
        }
    }

    const countPages = (count: number): number => Math.ceil(count / 6);
    const getCurrentPageNumber = (offset: number) =>  Math.ceil((offset + 1) / 6);

    const handleGetSearchPage = (url: string) => searchServices.getSearchPage.bind(null, url);

    const handleSetActivePage: MouseEventHandler<HTMLSpanElement> = async (event) => {
        const { previous, next } = paginationData;
        const id = (event.target as HTMLElement).dataset.id;

        const url = new URL(handleProtocolChange(!!next ? next : !!previous ? previous : ""));
        url.searchParams.set("offset", String(Number(id) * 6));

        await handleGetPaginationParams(handleGetSearchPage(url.href))
    }

    const handleGetPaginationParams = async (callback: () => Promise<ISearchResults>) => {
        const { count, next, previous, results } = await callback();

        setPaginationData({
            count,
            next,
            previous,
            offset: getCurrentOffset(next, previous)
        });

        setPageResults(results);
        setPageNumbers(getAllPages(countPages(count)))
    }

    const handleChangePage: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const route = (event.currentTarget as HTMLButtonElement).dataset.route;

        const httpsURL = handleProtocolChange((route === PaginationRoutes.prev ? paginationData.previous : paginationData.next) || "")

        await handleGetPaginationParams(handleGetSearchPage(httpsURL || ""))
    }

    const getAllPages = (pagesCount: number) => {
        const result: number[] = [];

        for (let i = 1; i <= pagesCount; i++) {
            result.push(i)
        }

        return result
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