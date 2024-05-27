import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image:
        {
            type: String,
            required: true
        },
        data : {
            type:String,
            required :true
        },
        url: {
            type: String,
        },
        category: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "user is required"]
        }
    },
    { timestamps: true }
)

export const News = mongoose.model("News", newsSchema);