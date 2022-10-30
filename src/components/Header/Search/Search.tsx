import React, { FC, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants/Routes';
import styles from "../Header.module.scss";

interface SearchProps {
    value: string,
    onChange: any,
    onSubmit: FormEventHandler,
}

const Search: FC<SearchProps> = ({value = "", onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit} className={styles.headerSearch}>
            <input type="text" placeholder='Search...' value={value} onChange={onChange}/>
            <button type='submit'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </form>
    );
};

export default Search;