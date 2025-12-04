import mongoose ,{Schema} from 'mongoose'
const Orderschema =new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        reqiured:true,
    },
    message:{
    type:String,
    required:true      
    },
      createdAt: {
    type: Date,
    default: Date.now // automatically stores time of creation
  }
   
})
const Order= mongoose.model("Order",Orderschema)
export default Order