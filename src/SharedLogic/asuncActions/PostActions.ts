import { setCardsAction } from "../SelectedCardReducer"

export const handlePosts = ():any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=11", {
            method: "GET",
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(response => dispatch(setCardsAction(response.results)))
            .catch(e => console.log(e))
    }
}
