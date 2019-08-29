import { showReducer } from "./Shows/reducers";
// import { tokenReducer } from "./Auth/reducers";

import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    shows: showReducer,
    // token: tokenReducer
})

// export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));