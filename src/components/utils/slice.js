import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"cart",
    initialState:{
        initialData:[],
        data:[]
        
    },
    reducers:{
        addAllData:(state,action) => {
            state.initialData =action.payload  
        },
        addData:(state, action)=>{
            state.data.push(action.payload)
        },
        remData:(state,action)=> {
            state.data = state.data.filter((item) => item.id !== action.payload.id)
        },
        clearData:(state)=>{
            state.data = []
        }

    }
}) 
export const { addData, remData, clearData, addAllData} = slice.actions
export default slice.reducer;

// // // Reducer
// export default sliceReducer = slice.reducer;

// // // Actions
// export const sliceActions = slice.actions;

