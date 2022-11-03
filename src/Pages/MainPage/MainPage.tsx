import React, { FC, useEffect, useState } from 'react';
import ListPosts from '../../components/ListPosts/ListPosts';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { TABS_CONFIG } from '../../components/Tabs/TabsConfig';
import "../../App/mixin.scss";
import Pagination from '../../components/Pagination/Pagination';
import { usePagination } from '../../context/PaginationContext';
import { setCardsAction } from '../../SharedLogic/reducers/SelectedCardReducer';
import PostsService from '../../services/postsService';

const MainPage: FC = () => {

    const dispatch = useDispatch();

    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const [posts, setPosts] = useState<IPost[]>([]);

    const {cards} = useSelector((state: any) => state.selectedCard);
    const {handleGetPaginationParams, pageResults, activePage} = usePagination();

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const setReduxPosts = (payload: IPost[]) => {
        dispatch(setCardsAction(payload));
    }

    const getPosts = async () => {
        await handleGetPaginationParams(PostsService.getPosts.bind(null, activePage === 1 ? 11 : 11))
    }

    const filterPosts = () => {
        switch (activeTabItem) {
            case 2:
                return setPosts(cards.filter((card: IPost) => card.favorite));

            default:
                setPosts(cards)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        setReduxPosts(pageResults)
    }, [pageResults])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    useEffect(() => {
        filterPosts();
    }, [activeTabItem, cards])

    return (
        <main style={{minHeight: "calc(100vh - 93px)"}}>
            <div className="wrapper">
                <Title title='Blog'/>
                <Tabs config={TABS_CONFIG} onClick={handleSetActiveTabItem} activeTabItem={activeTabItem}/>
                <ListPosts postsConfig={posts}/>
                <Pagination items={posts}/>
            </div>
        </main>
    );
};

export default MainPage;