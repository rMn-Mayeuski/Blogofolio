import { responseToJSONHandler } from "../../utils/responsUtil"
import { setCardsAction } from "../reducers/SelectedCardReducer"

export const handlePosts = ():any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=1000", {
            method: "GET",
        })
            .then(responseToJSONHandler)
            .then(response => dispatch(setCardsAction(response.results)))
            .catch(e => console.error)
    }
}
