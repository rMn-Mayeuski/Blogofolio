import { applyMiddleware, combineReducers, createStore} from "redux";
import { selectedCardReducer } from "./SelectedCardReducer";
import thunk from "redux-thunk";
import { userReducer } from "./UseReducer";

const rootReducers = combineReducers({
    selectedCard: selectedCardReducer,
    user: userReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));