import { IPost } from "../components/ListPosts/RenderPostCard/RenderPostCard";
import { responseToJSONHandler } from "../utils/responsUtil";
import HTTPService from "./HTTPService";

interface ISearchResults {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPost[],
}

class searchServices {
    static async getSearchResults( search: string )  {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?search=${search}`)
            .then(responseToJSONHandler)
            .catch(console.log)
    }
}

export default searchServices;