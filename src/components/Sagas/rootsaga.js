import { fork,all } from "redux-saga/effects"
import userSaga from "./saga.js"


export default function* rootSaga() {
    yield all([
        fork(userSaga)
    ])
}