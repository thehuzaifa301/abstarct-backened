import mongoose,{ Schema } from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required:true,
  },
});

export default mongoose.model('Image', imageSchema);
