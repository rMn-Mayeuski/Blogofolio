import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePagination } from '../../../context/PaginationContext';
import Pagination from '../../../components/Pagination/Pagination';
import searchServices from '../../../services/searchServices';
import SearchPage from '../SearchPage';

const RenderSearchPage: FC = () => {
    const { search } = useLocation();

    const { handleGetPaginationParams, pageResults } = usePagination();

    const query = search.split("?search=")[1];

    const handleSearch = async () => {
        await handleGetPaginationParams(searchServices.getSearchResults.bind(null, query))
    }

    useEffect( () => {
        handleSearch()
    }, [search])

        return (
            <>
                <SearchPage posts={pageResults} query={query}/> 
                <Pagination items={pageResults}/> 
            </>
        );
};

export default RenderSearchPage;