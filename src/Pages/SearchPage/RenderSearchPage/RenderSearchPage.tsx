import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import searchServices from '../../../services/searchServices';
import { handleArticle } from '../../../SharedLogic/asuncActions/PostContentActions';
import SearchPage from '../SearchPage';

const RenderSearchPage: FC = () => {
    const [post, setPost] = useState<IPost | null>(null)

    const { id = 1 } = useParams()
    const { article } = useSelector((state:any) => state.article)

    const { search } = useLocation();
    const query = search.split( "?search=")[1];
    
    const dispatch = useDispatch();
    
    const getPost = async () => {
        await dispatch(handleArticle(+id))
    }

    useEffect(() => {
        getPost()
    }, [])

    useEffect(() => {
        setPost(article)
    },)

    const [ matches, setMatches ] = useState< IPost[] >( [] )

    const handleSearch = async () => {
        // @ts-ignore
        const { results } = await searchServices.getSearchResults(query);

        console.log(results);

        // @ts-ignore
        if (Array.isArray(results.results)) {
            setMatches(results)
        }
    }


    useEffect( () => {
        handleSearch()
    }, [search])

        return (
            <div>
                <SearchPage posts={matches} />  
            </div>
        );
};

export default RenderSearchPage;