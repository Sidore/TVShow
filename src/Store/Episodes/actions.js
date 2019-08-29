import * as types from "./types";

export const fetchEpisodes = (id) => (dispatch) => {
    fetch(`http://api.tvmaze.com/episodes/${id}`)
        .then(res => res.json())
        .then(episode => {
            dispatch({
                type: types.GET_EPISODE,
                payload: episode
            })
        })
}