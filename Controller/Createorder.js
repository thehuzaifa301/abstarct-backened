import Order from '../MODELS/order.js';     
export const createorder=async(req,res)=>{
    const {name,email,message}=req.body;
    if(!name || !email || !message){
        return res.status(422).json({error:"please fill all the fields"})
    }
    try {
        const order=new Order({name,email,message});
        await order.save();
        res.status(201).json({message:"message sent successfully"});   
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
};
    export default createorder