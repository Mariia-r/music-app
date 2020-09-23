import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootSaga } from './rootSaga'
import createSagaMiddleware from 'redux-saga';
import songsReducer from "./songs-reducer";

let reducers = combineReducers({
    songsPage: songsReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;