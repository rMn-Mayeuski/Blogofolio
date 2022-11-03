import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import { SelectedCardReducer } from "./SelectedCardReducer";
import { userReducer } from "./UseReducer";
import { articleReducer } from "./PostContentReducer";

export type IRootState = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    selectedCard: SelectedCardReducer,
    user: userReducer,
    article: articleReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));