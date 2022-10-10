import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import ContentPage from '../ContentPage';
import data from "../../../SharedLogic/ProjectDate.json";

const PostContentPage: FC = () => {

        const { id } = useParams()

        const [post, setPost] = useState<IPost | null>(null)
    
        const {results: posts} = data;
    
        useEffect(() => {
        // @ts-ignore
        const selectedPost = posts.find(p => p.id === +id)
        if (selectedPost) {
            setPost(selectedPost)
        }
    }, [post])

    return (
        <>
            <ContentPage posts={post} />  
        </>
    );
};

export default PostContentPage;