import { applyMiddleware, combineReducers, createStore} from "redux";
import { SelectedCardReducer } from "./SelectedCardReducer";
import thunk from "redux-thunk";
import { userReducer } from "./UseReducer";
import { postsReducer } from "./PostReducer";
import { articleReducer } from "./PostContentReducer";

export type IRootState = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    selectedCard: SelectedCardReducer,
    user: userReducer,
    posts: postsReducer,
    article: articleReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));