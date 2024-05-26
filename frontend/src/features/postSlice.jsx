import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null
}

const postSlice = createSlice({
    name:"newsPost",
    initialState,
    reducers:{
        setdata :(state, action)=>{
            state.data = action.payload
        }
    }
})

export const {setdata} = postSlice.actions;
export const selectPost = (state)=>state.newsPost;
export default postSlice.reducer;