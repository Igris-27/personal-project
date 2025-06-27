import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import dataSlice from "./slice.js"
import { userReducer } from "../Sagas/reducer.js"
import rootSaga from "../Sagas/rootsaga.js"
import allReducers from "../Sagas/rootreducer.js"

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:allReducers,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);

export default store;
