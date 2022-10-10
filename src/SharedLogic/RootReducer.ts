import { combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit/dist';
import { selectedCardReducer } from "./SelectedCardReducer";

const rootReducers = combineReducers({
    selectedCard: selectedCardReducer,
});

export const store = configureStore({reducer: rootReducers});