import {getSongsData} from "../api/api";
import {call, takeLatest, put} from "redux-saga/effects";
import {GET_SONGS, acSetSongs} from "../store/songs-reducer";

export function* getSongs(action) {
    try {
        let songsData = yield call(getSongsData);
        const songs = songsData.map(song => ({
            ...song,
            like: false,
        }))
        yield put(acSetSongs(songs));
    } catch(e) {
        console.log(e);
    }
}

export function* rootSaga() {
    yield takeLatest(GET_SONGS, getSongs);
}