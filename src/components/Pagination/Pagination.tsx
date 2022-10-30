import React, {FC} from 'react';
import { usePagination } from '../../context/PaginationContext';

import styles from "./Pagination.module.css";

const Pagination: FC = () => {
    const { paginationData: {
        previous,
        next,
    },
        activePage,
        pageNumbers,
        pageResults,
        handleChangePage,
        handleSetActivePage,
    } = usePagination();

    const arr = pageNumbers.slice(activePage >= 3 ? activePage - 3 : activePage - activePage, activePage < pageNumbers.length ? activePage + 2 : activePage)

    if (!arr.includes(pageNumbers[pageNumbers.length - 1])) {
        arr.push(pageNumbers.at(-1) || 1)
    } else {
        arr.unshift(pageNumbers[0])
    }

    return (
        !!pageResults.length ?
        <div className={styles.pagination}>
            <button data-route={"prev"} disabled={!previous} onClick={handleChangePage}>Prev</button>

            <nav className={styles.paginationNumbers}>
                {arr.map((num, index) => {
                    if ((num + 1) !== arr[index + 1] && num !== arr.at(-1)) {
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
                                <span key={"..."}>...</span>
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
            <button data-route={"next"} disabled={!next} onClick={handleChangePage}>Next</button>
        </div> : null
    );
};

export default Pagination;