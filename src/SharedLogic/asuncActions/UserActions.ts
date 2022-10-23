import { setUserAction } from "../reducers/UseReducer"

export const handleUserSignUp = (email: string, password: string, username: string, callback: () => void):any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/auth/users/", {
            method: "POST",
            body: JSON.stringify({email, password, username}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.statusText)
            }
        })
        .then(user => dispatch(setUserAction(user)))
        .then(() => callback())
        .catch(console.error)
    }
}