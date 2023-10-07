import React, { useState } from "react";
import axios from "axios";

const UploadImage = ({setImageurl}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "gbet0dlm"); // Replace with your Cloudinary upload preset

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfcfjpmtk/image/upload",
        formData
      );

      console.log("Uploaded Image Data:", response.data.secure_url);
      setImageurl(response.data.secure_url);
      // Handle the response data as needed (e.g., store the image URL in your application state).
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="text-sm py-3">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="text-sm bg-blue-400 text-white font-semibold p-1" onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;
