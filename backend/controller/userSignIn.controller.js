import {AsyncHandler} from "../utils/AsyncHandler.js"
import {User} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcrypt";
import generateAccessTokenAndRefreshToken from "../utils/generateAccessTokenAndRefreshToken.js"

const Login = AsyncHandler(async (req, res) => {

    try {

        const { email, password} = req.body;

        if (!email) {
            throw new ApiError(409, "Enter Email please");
        }

        if (!password) {
            throw new ApiError(409, "Enter password !");
        }
        
        const user = await User.findOne({ email });
       
        if (!user) {
            throw new ApiError(400, "User Doesn't Exist");
        }
         console.log(user.password)
        
        const isPasswordValid = user.isPasswordCorrect(password)
        
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid user credentials")
        }

        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id)


        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        const options = {
            httpOnly:true,
            secure: true
         }

        return  res.status(200).cookie("accessToken", accessToken, options)
        .cookie("refreshToken" ,refreshToken, options)
        .json(
            {
                loggedInUser
            }
        )

    } catch (error) {
        res.json(
            {
                message: error.message || error,
                error: true,
                success: false
            }
        )
    }

})

export default Login;