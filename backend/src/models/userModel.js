import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },

        email:{
            type:String,
            required:true,
            unique:true,
        },

        password:{
            type:String,
            required:true,
        },
        confirmPassword:{
            type:String,
            required:true,
        }
    }
)

 // to encypt the password 
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
      next();
    }
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

// to decrypt the password
  userSchema.methods.matchPassword= async function (enteredPassword){
     return await bcrypt.compare(enteredPassword, this.password);
  }  

const User = mongoose.model("User",userSchema);

export default User;