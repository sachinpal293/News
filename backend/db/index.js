import mongoose, {connect} from "mongoose";

const DB_Name ="E-Commerce"
const connectDB = async () =>{
    try{
       const connectionInstance = await connect(`${process.env.MONGODB_URI}/${DB_Name}`)
       console.log(`\n MongoDb connected || DB Host : ${connectionInstance.connection.host}`)
    }catch(err)
    {
       console.log(err);
       process.exit(1);
    }
}

export default connectDB;