import * as types from "./types";

export const fetchShows = (showname) => (dispatch) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${showname}`)
        .then(res => res.json)
        .then(shows => {
            dispatch({
                type: types.GET_SHOWS,
                payload: shows
            })
        })
}

// TODO Cuncurrent request via Promise.All
export const fetchSingleShow = (id) => (dispatch) => {
    fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json)
        .then(show => {
            fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
                .then(res => res.json)
                .then(episods => {
                    show.episods = episods;
                    dispatch({
                        type: types.GET_SINGLE_SHOW,
                        payload: show
                    })
                })
        })
}