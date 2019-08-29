import * as types from "./types";

const initialState = {
    currentEpisode: {}
};

export function episodeReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_EPISODE:
            return {
                currentEpisode: action.payload
            }
        default: 
            return state    
    }
}