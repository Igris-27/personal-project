import { userReducer } from "./reducer";
import  dataSlice  from "../utils/slice";
import { combineReducers } from "redux";
const allReducers = combineReducers({
     users: userReducer,
     cart: dataSlice,
})
export default allReducers;