import Order from '../MODELS/order.js';
const getallOrder=async(req,res)=>{
    try {
        const  takingorder=await Order.find({});
        return res.status(200).json({status:200,message:"order fetched successfully",data:takingorder})
    }
    catch (error) {
        return res.status(500).json({status:500,message:"Server error",error:error.message})
    }
}
export default getallOrder;m