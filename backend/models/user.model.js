import mongoose,{ Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema =  new Schema(
    {
        name : {
            type:String,
            required : true,
            lowercase:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:[true, "Password is required"],
            lowercase:true
        },
        avatar : {
            type:String
        },
        refreshToken :{
            type:String,
        }
    },
    {timestamps:true}
)

// Encrypt the Password
userSchema.pre("save", async function(next){
   if(!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10)
   next()
})


// Compare the Password
userSchema.methods.isPasswordCorrect  = async function (password)
{
    return await bcrypt.compare(password, this.password)
}


// Generate Access Token
userSchema.methods.generateAccessToken = function(){

    return jwt.sign(
        {
            _id : this._id,
            email:this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Generate the Refresh Token 
userSchema.methods.generateRefreshToken = function(){

    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
           expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema);