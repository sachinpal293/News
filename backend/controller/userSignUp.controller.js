import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js"
import { AsyncHandler } from "../utils/AsyncHandler.js";

const userSignUp =  AsyncHandler( async (req, res) => {

    try {
        const { name, email, password } = req.body;
        
        const existUser = await User.findOne({email});
        if(existUser)
        {
            throw new ApiError(409,"User Already Registed!!")
        }
        const user = await User.create({name,email,password});

        
        res.json(
            {
                name,
                email,
                password,
                user
            }
        )

    } catch (error) {
        res.json({
            message:error.message || error,
            error :true,
            success : false
        })
    }
})

export default userSignUp;