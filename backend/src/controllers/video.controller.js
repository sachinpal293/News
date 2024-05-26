import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Video } from "../models/video.model.js"
import { uploadCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";

const uploadVideo = asyncHandler(async (req, res) => {
  const { _id, role } = await User.findById(req.user?._id)
  // if (role != "admin") {
  //   throw new ApiError(400, "You are not eligible to upload")
  // }
  const { title, description ,thumbnail, videoFile} = req.body
  

  if (!thumbnail) {
    throw new ApiError(400, "Thumbnail file is mandtory")
  }

  if (!videoFile) {
    throw new ApiError(400, "video file is required")
  }

  const video = await Video.create(
    {
      videoFile,
      thumbnail,
      title,
      description,
      owner: _id
    }
  )

  const finaluploadedFile = await Video.findById(video._id)

  const { owner } = finaluploadedFile;

  const { username, avatar } = await User.findById(owner);

  if (!finaluploadedFile) {
    throw new ApiError(401, "something went wrong while uploading")
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { username, avatar }, "Fine this is working upload"))
})

const getAllVideo = asyncHandler(async (req, res) => {
  // const { _id, createdAt } = await User.findById(req.user?._id)

  // if (!_id) {
  //   throw new ApiError(400, "User not login")
  // }
  
 const videodata = await Video.find({})

  return res
    .status(200)
    .json(new ApiResponse(200, { videodata }, "All Video data fetch from data base"))



})


export {
  uploadVideo,
  getAllVideo
}