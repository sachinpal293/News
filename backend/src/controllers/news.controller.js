import { News } from "../models/news.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";

const uploadPost = asyncHandler(async (req, res) => {
    const { title, description, url , author } = req.body;
    
    const existinguser  =  await User.findById(author)


    if (!title) {
        throw new ApiError(400, "Title Fields are required");
    }

    if (!description) { throw new ApiError(400, "Description is required") }
    
    
    const payload ={
      ...req.body
    }
    const postNews = await News.create(payload)
    existinguser.blogs.push(postNews)


    return res.send(postNews);
})


const getAllUserPosts = asyncHandler(async(req, res)=>{
     const {user} = req.body;
    const userexist = await User.findById(user);
    if(!userexist)
        {
            throw new ApiError(400, "User not login")
        }
    
    const postdata = await News.find({author:userexist});

    return res
    .status(200)
    .json(new ApiResponse(200, {postdata},"All post data fetch from database"));
})

 const getAllPosts = asyncHandler(async(req,res)=>{
    const postdata = await News.find({category:"sports"});

    return res
    .status(200)
    .json(new ApiResponse(200, {postdata},"All post data fetch from database"));
 })
export { uploadPost , getAllPosts, getAllUserPosts};