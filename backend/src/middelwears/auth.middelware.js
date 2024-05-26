import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import  Jwt  from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, res, next)=>{
   
    try {
        const token = req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer", "")
    
        if(!token)
        {
            throw new ApiError(401, "Unauthorized request")
        }
        
        const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log("Hello ji",decodedToken)
       const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken"
        )
       console.log(user)
        if(!user)
        {
            throw new ApiError(401,"Invalid Access Token")
        }
        
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid access token")
    }
})

