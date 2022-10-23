import { Reducer } from "redux";
import { IPost } from "../../components/ListPosts/RenderPostCard/RenderPostCard";

const SELECT_CARD = "SELECT_CARD";
const SELECT_IMG = "SELECT_IMG";

enum SelectedCardActions {
    SELECT_CARD = "SELECT_CARD",
    SELECT_IMG = "SELECT_IMG",
    SET_CARDS = "SET_CARDS",
    UPDATE_CARD = "UPDATE_CARD",
}

export interface initialStateType {
    selectedCard: IPost | null,
    selectedImg: string,
    cards: IPost[]
}

const initialState: initialStateType = {
    selectedCard: null,
    selectedImg: "null",
    cards: []
}

export const SelectedCardReducer:Reducer = ((state = initialState, action) => {
    switch (action.type) {
        case SelectedCardActions.SELECT_CARD:
        {
            return {...state, selectedCard: action.payload}

        }
        case SelectedCardActions.SELECT_IMG: {
            return {...state, selectedImg: action.payload}
        }
        case SelectedCardActions.SET_CARDS:
            return {...state, cards: action.payload}

        case SelectedCardActions.UPDATE_CARD:
            const arr = state.cards.map((item: IPost) => item)
            const oldCard = arr.find((card: IPost) => card.id === action.payload.id)
            const cardIndex = arr.indexOf(oldCard)
            arr.splice(cardIndex, 1, action.payload);
            return {...state, cards: arr}

        default: return state
    }
})

export const selectCardAction = (payload: any) => ({type: SELECT_CARD, payload});
export const selectImgAction = (payload: any) => ({type: SELECT_IMG, payload});
export const setCardsAction = (payload: IPost[]) => ({type: SelectedCardActions.SET_CARDS, payload});
export const updateCardAction = (payload: IPost) => ({type: SelectedCardActions.UPDATE_CARD, payload});