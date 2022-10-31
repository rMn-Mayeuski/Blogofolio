import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { usePagination } from '../../../context/PaginationContext';
import searchServices from '../../../services/searchServices';
import SearchPage from '../SearchPage';

const RenderSearchPage: FC = () => {
    const { search } = useLocation();
    const { handleGetPaginationParams, pageResults } = usePagination();
    const dispatch = useDispatch();
    const query = search.split("?search=")[1];

    const { cards } = useSelector((state:any) => state.selectedCard)

    const handleSearch = async () => {
        await handleGetPaginationParams(searchServices.getSearchResults.bind(null, query))

        // const response = await searchServices.getSearchResults(query);
        // const { results } = response;

        // if (Array.isArray(results)) {
        //     dispatch(setCardsAction(results))
        // }
    }

    useEffect( () => {
        handleSearch()
    }, [search])

        return (
            <>
                <SearchPage posts={pageResults} query={query}/> 
                <Pagination/> 
            </>
        );
};

export default RenderSearchPage;