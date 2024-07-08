import mongoose from "mongoose";
import colors from "colors";

// this is being set up only once for connecting to the mongodbatlas and compass here all the connection setup has been completed now we will create the models
const connectDB = async () => {
  try {
    const conn =  await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
    
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;     