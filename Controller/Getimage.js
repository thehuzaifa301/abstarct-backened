import Image from '../MODELS/index.js';
const getImage=async(req,res)=>{
    try {
        const  image=await Image.find({});
        return res.status(200).json({status:200,message:"Images fetched successfully",data:image})
    }
    catch (error) {
        return res.status(500).json({status:500,message:"Server error",error:error.message})
    }
}
export default getImage;