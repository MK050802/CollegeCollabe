import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required:true

        },
        imgURL:{
            type:String,
            required:true
        },
        review:{
            type : String,
            required : true
        }
    }
);

const News = mongoose.model('News',NewsSchema);

export default News;