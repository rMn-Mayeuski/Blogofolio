import React, { ChangeEvent, FC, FormEvent, MouseEventHandler, useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import styles from "./Header.module.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

const Header: FC = () => {

    const [menuActive, setMenuActive] = useState(false);

    const burgerMenuActive = () => setMenuActive(!menuActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }
    
    const [ searchQuery, setSearchQuery ] = useState<string>( "" );
    const navigate = useNavigate();
    const location = useLocation()

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate( `${Routes.search}?search=${searchQuery}` );
        setSearchQuery("");
    };

    return (
        <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div 
                        className={styles.headerBurger}
                        onClick= {burgerMenuActive}
                    >
                        <span></span>
                    </div>
                    <Search 
                        value={searchQuery} 
                        onSubmit={handleSearch}
                        onChange={handleSearchQueryChange}
                    />
                    <UserInfo 
                        userName={''}
                        avatarUrl={""}
                    />
                    <BurgerMenu 
                        authMenu={menuActive} 
                        onClick={handleClickAway}
                    />
                </div>
        </header>
    );
};

export default Header;