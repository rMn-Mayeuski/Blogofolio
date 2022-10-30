import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import searchServices from '../../../services/searchServices';
import { setCardsAction } from '../../../SharedLogic/reducers/SelectedCardReducer';
import SearchPage from '../SearchPage';

const RenderSearchPage: FC = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const query = search.split("?search=")[1];

    const { cards } = useSelector((state:any) => state.selectedCard)

    const handleSearch = async () => {
        const response = await searchServices.getSearchResults(query);
        const { results } = response;

        if (Array.isArray(results)) {
            dispatch(setCardsAction(results))
        }
    }

    useEffect( () => {
        handleSearch()
    }, [search])

        return (
            <>
                <SearchPage posts={cards} query={query}/> 
                {/* <Pagination/>  */}
            </>
        );
};

export default RenderSearchPage;