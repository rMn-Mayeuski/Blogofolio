import { setArticleAction } from "../PostContentReducer"

export const handleArticle = (id: number):any => {
    return (dispatch: any) => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(response => dispatch(setArticleAction(response)))
            .catch(e => console.log(e))
    }
}