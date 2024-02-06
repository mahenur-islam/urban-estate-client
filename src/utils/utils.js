import axios from "axios";

export const imageUpload = async image => {
  //need to make a formData instance that means with a form system
  const formData = new FormData()
  formData.append("image", image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data
};
