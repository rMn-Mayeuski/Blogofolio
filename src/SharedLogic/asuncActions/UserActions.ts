import TokenService from "../../services/tokenService"
import UserService from "../../services/userService"
import { setUserAction } from "../reducers/UseReducer"

export const handleUserSignUp = (email: string, password: string, username: string, callback: () => void = () => {}) => {
    return (dispatch: any) => {
        UserService.createUser(email, password, username)
            .then(user => dispatch(setUserAction(user)))
            .then(() => callback())
            .catch(console.error)
    }
}

export const handleUserSignIn = (email: string, password: string, callback: () => void) => {
    return (dispatch: any) => {
        TokenService.createToken(email, password)
            .then(tokens => {
                for (let token in tokens) {
                    localStorage.setItem(token, tokens[token])
                }
                return UserService.getUser(tokens.access)
            })
            .then(user => dispatch(setUserAction(user)))
            .then(() => callback())
            .catch(console.error)
    }
}

export const handleGetUser = (accessToken: string, refreshToken: string) => {
    return (dispatch: any) => {
        UserService.getUser(accessToken)
            .then(user => dispatch(setUserAction(user)))
            .catch(() => TokenService.updateAccessToken(refreshToken))
            .then(token => {
                if (typeof token === "object") {
                    localStorage.setItem("access", token.access)
                    return UserService.getUser(token.access)
                }
            })
            .then(user => {
                if (typeof user === "object") {
                    dispatch(setUserAction(user))
                }
            })
            .catch(console.error)
    }
}