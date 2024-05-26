import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { addLink} from "./videoSlice";


export const VideoAdd = () =>{
    const url = useSelector(state => state.value)
    const dispatch = useDispatch();
    const link = "www.kuchtohai.com";

    const handlesubmit = (e)=>{
       dispatch(addLink(link));
       
       console.log(link)
    }
  
    return(
        <>
        <button onClick={handlesubmit}>Click me</button>
        <h1>{url}</h1>
        </>
    )
}