import Tweet from "../models/tweet.js";

class TweetRepository{

    async create(data)
    {
        try{

            let tweet = await Tweet.create(data);
            return tweet;

        }
        catch(error){
            console.log(error);
            throw error;

        }
    }

    async getAllTweets(data)
    {
        try{

            let tweets = await Tweet.find();
            return tweets;

        }
        catch(error){
            console.log(error);
            throw error;

        }
    }

}
export default TweetRepository;
//CRUD -CREATE GET DELETE