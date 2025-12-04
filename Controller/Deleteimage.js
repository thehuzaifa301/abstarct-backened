import Image from '../MODELS/index.js';
const deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await Image.findByIdAndDelete(imageId);

    if (!deletedImage) {
      return res.status(404).json({ status: 404, message: 'Image not found' });
    }       
    return res.status(200).json({ status: 200, message: 'Image deleted successfully', data: deletedImage });
} catch (error) {
    return res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

export default deleteImage;