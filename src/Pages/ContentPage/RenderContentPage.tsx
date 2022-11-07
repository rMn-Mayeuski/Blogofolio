import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';
import ContentPage from './ContentPage/ContentPage';
import { useDispatch, useSelector } from 'react-redux';
import { handleArticle } from '../../SharedLogic/asuncActions/PostContentActions';
import { setArticleAction } from '../../SharedLogic/reducers/PostContentReducer';
import ContentPagePagination from './ContentPagePagination/ContentPagePagination';
import styles from "./ContentPage/ContentPage.module.scss";

const RenderContentPage: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postCard, setPostCard] = useState<IPost | null>(null);
    const [nextTitle, setNextTitle] = useState<string>("");
    const [previousTitle, setPreviousTitle] = useState<string>("");

    const {id = 1} = useParams();
    const {cards} = useSelector((state: any) => state.selectedCard);
    const { article } = useSelector((state: any) => state.article);

    const selectedCard = cards.find((postCard: IPost) => postCard.id === +id);

    const nextPost = cards.find((postCard: IPost, index: number) => ((cards.indexOf(selectedCard) + 1) === index));

    const previousPost = cards.find((postCard: IPost, index: number) => ((cards.indexOf(selectedCard) - 1) === index));

    const getPostCard = async () => {
        await dispatch(handleArticle(+id));
    }

    const handleNextPost = () => navigate(`/contentpage/${nextPost?.id}`);
    const handlePreviousPost = () => navigate(`/contentpage/${previousPost?.id}`);

    useEffect(() => {
        dispatch(setArticleAction(null))
        getPostCard()
    }, [id]);

    useEffect(() => {
        setPostCard(article)
        setNextTitle(!!nextPost?.title ? nextPost?.title : null)
        setPreviousTitle(!!previousPost?.title ? previousPost?.title : null)
    })

    if (postCard) {
        return (
            <article className={styles.wrapper}>
                <ContentPage post={postCard} />
                <ContentPagePagination
                    previousTitle={previousTitle}
                    onClickPrevious={handlePreviousPost}
                    nextTitle={nextTitle}
                    onClickNext={handleNextPost}
                />
            </article>
        );
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
};

export default RenderContentPage;