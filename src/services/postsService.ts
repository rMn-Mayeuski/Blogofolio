import { IPost } from "../components/ListPosts/RenderPostCard/RenderPostCard";
import { responseToJSONHandler } from "../utils/responsUtil";
import HTTPService from "./HTTPService";

export interface PostsResults {
    count: number
    next: string | null
    previous: string | null
    results: IPost[]
}

export interface CreatePostData {
    title: string
    text: string
    image: File | string
    lesson_num: number
}

export default class PostsService {
    static async getPosts(limit: number = 6, offset: number = 0): Promise<PostsResults> {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?limit=${limit}&offset=${offset}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async addPost(data: CreatePostData, token: string): Promise<IPost> {
        return await HTTPService.post("https://studapi.teachmeskills.by/blog/posts/" , data, {
            "Authorization": `Bearer ${token}`
        })
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}