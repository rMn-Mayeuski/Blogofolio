import {Reducer} from "redux";

const SELECT_CARD = "SELECT_CARD";

const initialState = {
    selectedCard: null
}

export const selectedCardReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return {...state, selectedCard: action.payload }
        default:
            return state
    }
}

export const selectCardAction = (payload: any) => ({type: SELECT_CARD, payload});