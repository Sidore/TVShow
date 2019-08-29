import * as types from "./types";

const initialState = {
    currentShow : {
        episodes: []
    },
    shows : []
};

export function showReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_SHOWS : 
            return {
                ...state,
                shows : [...action.payload]
            }
        case types.GET_SINGLE_SHOW : 
            return {
                ...state,
                currentShow : action.payload
            }
        default: 
            return state    
    }
}