import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import ContentPage from '../ContentPage';
import { useDispatch, useSelector } from 'react-redux';
import { handleArticle } from '../../../SharedLogic/asuncActions/PostContentActions';

const PostContentPage: FC = () => {
    const [post, setPost] = useState<IPost | null>(null)
    
    const { id = 1 } = useParams()
    const { article } = useSelector((state:any) => state.article)

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
    
    if (post) {
        return (
            <div>
                <ContentPage posts={post} />  
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
};

export default PostContentPage;