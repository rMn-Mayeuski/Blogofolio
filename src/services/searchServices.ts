import { IPost } from "../components/ListPosts/RenderPostCard/RenderPostCard";
import { responseToJSONHandler } from "../utils/responsUtil";
import HTTPService from "./HTTPService";

export interface ISearchResults {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPost[],
}

class searchServices {
    static async getSearchResults( search: string = "", offset: number = 0, limit: number = 11  ): Promise<ISearchResults>  {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?search=${search}&limit=${limit}&offset=${offset}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<ISearchResults> {
        return await HTTPService.get(url).then(responseToJSONHandler).catch(console.log)
    }
}

export default searchServices;