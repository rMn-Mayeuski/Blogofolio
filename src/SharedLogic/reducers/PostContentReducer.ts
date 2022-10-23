import {Reducer} from "redux";
import { IPost } from "../../components/ListPosts/RenderPostCard/RenderPostCard";

enum articleActions {
    SET_ARTICLE = "SET_ARTICLE",
}

interface IInitialState {
    article: IPost | null
}

const initialState: IInitialState = {
    article: null
}

export const articleReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case articleActions.SET_ARTICLE:
            return { article: action.payload }

        default:
            return state
    }
}

export const setArticleAction = (payload: any) => ({type: articleActions.SET_ARTICLE, payload});