import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import ContentPage from '../ContentPage';
import { useDispatch, useSelector } from 'react-redux';
import { handleArticle } from '../../../SharedLogic/asuncActions/PostContentActions';
import { setArticleAction } from '../../../SharedLogic/reducers/PostContentReducer';

const PostContentPage: FC = () => {
    const dispatch = useDispatch();

    const [postCard, setPostCard] = useState<IPost | null>(null);

    const {id = 1} = useParams();

    const { article } = useSelector((state: any) => state.article);

    const getPostCard = async () => {
        await dispatch(handleArticle(+id));
    }

    useEffect(() => {
        dispatch(setArticleAction(null))
        getPostCard()
    }, [id]);

    useEffect(() => {
        setPostCard(article)
    })

    if (postCard) {
        return (
            <>
                <ContentPage post={postCard} />  
            </>
        );
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
};

export default PostContentPage;