export const GET_SHOWS = "GET_SHOWS";
export const GET_SINGLE_SHOW = "GET_SINGLE_SHOW";

export function getShows(shows) {
    return {
        type: GET_SHOWS,
        payload: shows
    }
}

export function getSingleShow(show) {
    return {
        type: GET_SINGLE_SHOW,
        payload: show
    }
}