export const GET_SONGS = "GET_SONGS";
const SET_SONGS = "SET_SONGS";
const LIKE_SONG = "LIKE_SONG";

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
        case LIKE_SONG: {
            return {
                ...state,
                songs: [...state.songs, state.songs.find(item => item.title.label === action.titleSong && (item.like = true))]
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
export const acLikeSong = (titleSong) => {
    return { type: LIKE_SONG, titleSong }
}

export default songsReducer;