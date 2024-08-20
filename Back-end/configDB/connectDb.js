import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async()=>{
    try {
        const connectionString = process.env.DBSTRING
        await mongoose.connect(connectionString)
        console.log("DB Connected")
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}
export default connectDB