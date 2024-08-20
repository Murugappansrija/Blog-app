import express from "express";
import connectDB from "./configDB/connectDb.js"
import userRouter from "./router/userRoutes.js";
import cors from "cors"

const app = express();
app.use(express.json())
connectDB()
app.use(cors())
app.use("/user",userRouter)

const port =process.env.PORT || 8000
app.listen(port, () => {
  console.log(`server running under port ${port}`);
});
