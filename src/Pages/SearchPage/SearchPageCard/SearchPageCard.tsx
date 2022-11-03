import React, { FC } from 'react';
import styles from "../SearchPage.module.scss"
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import PostActions, { ActionsVariants } from '../../../components/PostActions/PostActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';

const SearchPageCard: FC<IPost> = (props) => {

    const { id = 1, title, date, image} = props;

    const navigate = useNavigate();

    const handlePostPageOpen = () => navigate(`/contentpage/${id}`)

    const {cards} = useSelector((state: any) => state.selectedCard);

    const selectedPost = cards.find((contentPost: IPost) => contentPost.id === +id);

    const dispatch = useDispatch();
    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <>
            <div className={styles.serachPageContentCard}>
                <div className={styles.serachPageContentCardTop}>
                    <img src={image} alt="img" />
                    <div className={styles.serachPageContentCardTopText}>
                        <p className={styles.serachPageContentCardTopTextDate}>
                            {date}
                        </p>
                        <h3 className={styles.serachPageContentCardTopTextTitle} onClick={handlePostPageOpen}>
                            {title}
                        </h3>
                    </div>
                </div>
                {selectedPost
                ?
                <PostActions variant={ActionsVariants.forCards} post={selectedPost} />
                :
                <PostActions variant={ActionsVariants.forCards} post={props}/>
            }
                
            </div>
        </>
    );
};

export default SearchPageCard;