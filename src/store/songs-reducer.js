export const GET_SONGS = "GET_SONGS";
const SET_SONGS = "SET_SONGS";
const LIKE_UNLIKE_SONG = "LIKE_UNLIKE_SONG";

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
        case LIKE_UNLIKE_SONG: {
            return {
                ...state,
                songs: state.songs.map(song => song.title.label === action.titleSong ? {...song, like: !song.like} : song)
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
export const acLikeUnlikeSong = (titleSong) => {
    return { type: LIKE_UNLIKE_SONG, titleSong }
}

export default songsReducer;