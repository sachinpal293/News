import mongoose, {Schema} from "mongoose";

const newsSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description : {
            type:String,
            required:true
        },
        coverImage:
        {
            type:String,
            required:true
        },
        url : {
            type:String,
        },
        author:{
            type: Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {timestamps:true}
)

export const News = mongoose.model("News",newsSchema);