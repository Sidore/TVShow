import { showReducer } from "./Shows/reducers";
import { episodeReducer } from "./Episodes/reducers";

import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    shows: showReducer,
    episodes: episodeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));