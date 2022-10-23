import {Reducer} from "redux";

const GET_POSTS = "GET_POSTS";

const initialState = {
    posts: []
};

export const postsReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            const results = action.payload;
            return {...state, posts: results};

        default:
            return state
    }
};

export const getPostsAction = (payload: any) => ({type: GET_POSTS, payload});