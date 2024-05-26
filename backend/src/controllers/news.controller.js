import { News } from "../models/news.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";

const uploadPost = asyncHandler(async (req, res) => {
    const { title, description, url } = req.body;
    const coverImageLocalPath = req.file?.path;
    const { _id} =  await User.findById(req.user?._id)


    if (!title) {
        throw new ApiError(400, "Title Fields are required");
    }

    if (!description) { throw new ApiError(400, "Description is required") }
    if (!url) { throw new ApiError(400, "Url is required") }
    if (!coverImageLocalPath) { throw new ApiError(400, "All fields are required") }


    const coverImage = await uploadCloudinary(coverImageLocalPath)
    console.log(coverImage)
    if (!coverImage) {
        throw new ApiError(400, "Blog Image is Required");
    }

    const postNews = await News.create({
        title,
        description,
        url,
        coverImage:coverImage.url,
        author : _id
    })



    return res.send(postNews);
})


const getAllPosts = asyncHandler(async(req, res)=>{
     
    const {_id} = await User.findById(req.user?._id);
    if(!_id)
        {
            throw new ApiError(400, "User not login")
        }
    
    const postdata = await News.find({author:_id});

    return res
    .status(200)
    .json(new ApiResponse(200, {postdata},"All post data fetch from database"));
})

export { uploadPost , getAllPosts};