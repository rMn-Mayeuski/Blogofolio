import {Reducer} from "redux";
import { IPost } from "../components/ListPosts/RenderPostCard/RenderPostCard";

enum SelectedCardActions {
    SELECT_CARD = "SELECT_CARD",
    SET_CARDS = "SET_CARDS",
    UPDATE_CARD = "UPDATE_CARD",
}

const initialState = {
    selectedCard: null,
    cards: []
}

export const selectedCardReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SelectedCardActions.SELECT_CARD:
            return {...state, selectedCard: action.payload }

        case SelectedCardActions.SET_CARDS:
            return {...state, cards: action.payload}  

        case SelectedCardActions.UPDATE_CARD: 
            const oldArr = state.cards;
            const oldCard = oldArr.find((card: IPost) => card.id === action.payload.id);
            const cardIndex = oldArr.indexOf(oldCard);
            oldArr.splice(cardIndex, 1, action.payload);
            return {...state, cards: oldArr}
        

        default:
            return state
    }
}

export const selectCardAction = (payload: any) => ({type: SelectedCardActions.SELECT_CARD, payload});
export const setCardsAction = (payload: IPost[]) => ({type: SelectedCardActions.SET_CARDS, payload});
export const updateCardAction = (payload: IPost) => ({type: SelectedCardActions.UPDATE_CARD, payload});