import React, { FC, MouseEventHandler } from 'react';
import styles from "./ContentPagePagination.module.scss";

interface IContentPagePaginationProps {
    nextTitle?: string | null
    previousTitle?: string | null
    onClickNext?: MouseEventHandler<HTMLButtonElement>
    onClickPrevious?: MouseEventHandler<HTMLButtonElement>
}

const ContentPagePagination: FC<IContentPagePaginationProps> = ({
    nextTitle,
    previousTitle,
    onClickNext,
    onClickPrevious
}) => {
    return (
        <div className={styles.contentPagination}>
            <button disabled={!previousTitle} onClick={onClickPrevious} className={styles.contentPaginationPrev}>
                <div className={styles.contentPaginationPrevNav}>
                    <p className={styles.contentPaginationText}>Prev</p>
                    {!!previousTitle && <p className={styles.contentPaginationTitle}>{previousTitle}</p>}
                </div>
            </button>
            <button disabled={!nextTitle} onClick={onClickNext} className={styles.contentPaginationNext}>
                <div className={styles.contentPaginationNextNav}>
                    <p className={styles.contentPaginationText}>Next</p>
                    {!!nextTitle && <p className={styles.contentPaginationTitle}>{nextTitle}</p>}
                </div>
            </button>
        </div>
    );
};

export default ContentPagePagination;