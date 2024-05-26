import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name:'VideoContext',
    initialState : {
        value : "",
        text : ""
    },
    reducers:{
        addLink :(state, action)=>{
            state.value = action.payload
           
        },
        addTitle:(state,action)=>{
            state.text = action.payload
        }
    }
})

export const {addLink} = videoSlice.actions

export default videoSlice.reducer