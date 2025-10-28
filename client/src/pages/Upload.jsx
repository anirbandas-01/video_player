import React, { useState } from 'react'
import axios from 'axios'

const Upload = () => {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [videoFile, setVideoFile] = useState(null);
   const [thumbnail, setThumbnail] = useState(null);
   const [loading, setLoading] = useState(false);


   const handelSubmit = async (e)=> {
    e.preventDefault();
    if(!videoFile || !thumbnail){
        alert("please select both video and thumbnail!");
        return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("videoFile", videoFile);
    formData.append("thumbnail", thumbnail);

    try {
        setLoading(true);
        const res = await axios.post("http://localhost:8000/api/v1/videos/upload", formData,{
            headers: {"Content-Type": "multipart/form-data"},
            withCredentials: true,
        });
        console.log("upload success:", res.data);
        alert("✅ Video uploaded successfully!");
    } catch (err) {
         console.error("Upload failed:", err);
         alert("❌ Upload failed");
    } finally {
        setLoading(false);
    }
   };

  return (
    <div className='max-w-xl max-auto text-white space-y-4'>
        <h2 className='text-2xl font-bold mb-4'>Upload a New Video</h2>
        <form onSubmit={handelSubmit} className='space-y-3'>

            <input type='text' placeholder='Title' className='w-full bg-gray-800 rounded p-2' value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />

            <textarea placeholder='Description' className='w-full bg-gray-800 rounded p-2' value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            
            <div>
                <label>🎥 Select Video File:</label>
                
                <input type='file' accept='video/*' 
                 onChange={(e)=> setVideoFile(e.target.files[0])}
                />
                
                <div>
                    <label>🖼️ Select Thumbnail:</label>
                    <input type='file' accept='image/*'
                     onChange={(e)=>setThumbnail(e.target.files[0])}
                    />
                </div>

                <button type='submit'  className='bg-read-600 px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50'>
                    {loading ? "Uploading...": "upload video"}
                </button>
            </div>
        </form>
    </div>
  )
}

export default Upload