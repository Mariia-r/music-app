export const GET_SONGS = "GET_SONGS";
const SET_SONGS = "SET_SONGS";

let initialState = {
    songs: [],
}

const songsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SONGS: {
            return {
                ...state,
                songs: action.songs
            }
        }
        default:
            return state;
    }
};

export const acGetSongs = () => {
    return { type: GET_SONGS }
};

export const acSetSongs = (songs) => {
    return { type: SET_SONGS, songs }
};

export default songsReducer;