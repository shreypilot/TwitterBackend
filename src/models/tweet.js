import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String
    },
    likes:{
        types:Number
    },
    noOfRetweets:{
        type:Number
    },
    comment:{
        types:String
    }

});

const Tweet =  mongoose.model("Tweet",tweetSchema)//modelname,schema

export default Tweet;