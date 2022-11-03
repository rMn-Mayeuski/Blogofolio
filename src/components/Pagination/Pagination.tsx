import React, {FC, useEffect, useState} from 'react';



import styles from "./Pagination.module.scss";
import { IPost } from '../ListPosts/RenderPostCard/RenderPostCard';
import { usePagination } from '../../context/PaginationContext';

interface PaginationProps {
    items?: IPost[]
}

const Pagination: FC<PaginationProps> = ({items= []}) => {

    const {paginationData: {
        previous,
        next
    },
        activePage,
        pageResults,
        pageNumbers,
        handleChangePage,
        handleSetActivePage
    } = usePagination();

    const [paginationItems, setPaginationItems] = useState<number[]>([]);

    const getPaginationItems = () => {
        const result = pageNumbers.slice(activePage >= 3 ? activePage - 3 : activePage - activePage, activePage < pageNumbers.length ? activePage + 2 : activePage);

        if (!result.includes(pageNumbers[pageNumbers.length - 1])) {
            result.push(pageNumbers.at(-1) || 1)
        }

        if (!result.includes(pageNumbers[0])) {
            result.unshift(pageNumbers[0])
        }

        return result
    }

    useEffect(() => {
        setPaginationItems(getPaginationItems())
    }, [pageNumbers, activePage])

    return (
        !!items?.length && !!pageResults.length
            ?
            <div className={styles.pagination}>
                <button data-route={"prev"} disabled={!previous} onClick={handleChangePage} className={styles.arrowPrev}>
                    <p>Prev</p>
                </button>
                <nav className={styles.paginationNumbers}>
                    {paginationItems.map((num, index) => {
                        if ((num + 1) !== paginationItems[index + 1] && num !== paginationItems.at(-1)) {
                            return (
                                <>
                                    <span
                                        key={num}
                                        data-id={num - 1}
                                        onClick={handleSetActivePage}
                                        className={activePage === num ? styles.active : ""}
                                    >
                                        {num}
                                    </span>
                                    <span key={`smt${num}`}>...</span>
                                </>
                            )
                        } else {
                            return (
                                <span
                                    key={num}
                                    data-id={num - 1}
                                    onClick={handleSetActivePage}
                                    className={activePage === num ? styles.active : ""}
                                >
                                    {num}
                                </span>
                            )
                        }}
                    )}
                </nav>
                <button data-route={"next"} disabled={!next} onClick={handleChangePage} className={styles.arrowNext}>
                    <p >Next</p>
                </button>
            </div>
            :
            null
    );
};

export default Pagination;