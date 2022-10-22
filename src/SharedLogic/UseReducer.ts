import {Reducer} from "redux";

enum UserActions {
    SET_USER = "SET_USER",
    UPDATE_USER = "UPDATE_USER",
}

interface IUser {
    id: number,
    username: string,
    email: string
}

interface IInitialState {
    user: IUser | null
}

const initialState: IInitialState = {
    user: null
}

export const userReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return { user: action.payload }

        case UserActions.UPDATE_USER:
            return { user: action.payload }  

        default:
            return state
    }
}

export const setUserAction = (payload: any) => ({type: UserActions.SET_USER, payload});
export const updateUserAction = (payload: any) => ({type: UserActions.UPDATE_USER, payload});