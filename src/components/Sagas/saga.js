import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchusersaga(){
    try {
        // const axios = require('axios')
        const response = yield call(axios.get,"https://jsonplaceholder.typicode.com/users");
        console.log("Response from API:", response);
        yield put({
            type:"FETCH_USER_SUCCESS",
            payload: response.data
})
    }
    catch(error){
        yield put({
            type: "FETCH_USER_FAILURE",
            payload: error.message || "Something went wrong"
})
    }
}


function* userSaga() {
    yield takeEvery("FETCH_USER_REQUEST",fetchusersaga);
    
}
export default userSaga;