import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import userRoute from "../backend/routes/user.route.js"

const app = express()
app.use(cors());
app.use(express.json())

const port = 3000

dotenv.config();

const PORT  = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to MongoDb

try {
    mongoose.connect(URI,{
        //useNewUrlparser:true,
        //useUnifiedtopology:true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ",error)
    
}

//defining routes

app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
}) 