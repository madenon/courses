import mongoose from "mongoose";

const  connectDB = async()=>{
     mongoose.connection.on('connected', ()=>{
        console.log("DB connecté")
     })
      await mongoose.connect(`${process.env.MONGO_URI}/ecommerce`)
}

export default connectDB