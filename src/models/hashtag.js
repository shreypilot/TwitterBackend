import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        unique:true
    },
    tweets:{
        type:mongoose.Schema.Types.ObjectId
    }

});

const Hashtag =  mongoose.model('Hahstag',hashtagSchema)//modelname,schema

export default Hashtag;

//#fun --- #travel 
//Hi i am travelling to goa #travel

//schema -> blueprint bana do document ka 