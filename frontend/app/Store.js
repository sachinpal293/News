import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../src/features/video/videoSlice.jsx"
import authReducer from "../src/features/authSlice.jsx"
import newsPostReducer from "../src/features/postSlice.jsx"
export default configureStore({
    reducer:  {
        videoReducer:videoReducer,
        auth : authReducer,
        newsPost : newsPostReducer
    }
    
})

