import express from "express";
import connect from "./config/database.js";
const app = express();
import Tweet from "./models/tweet.js";
app.listen(3001,async ()=>{
    console.log("server started at 3001")
    //mongodb connection establishment
    connect();
//     mongoose.connect('mongodb+srv://champjhuie28:<password>@cluster0.cf79upz.mongodb.net/')
//      - humesa jarurat padegi so better hai kiconfig file mein dal de
          console.log("Mongo DB Connected")

          Tweet.create({
            content:"This is my first tweet",
            likes:25,
            noOfRetweets:5,
            comment:"This is my first tweet"

          })
         
})