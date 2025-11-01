import React, { useState } from 'react';
import { Upload as UploadIcon, Video, Image, FileText } from 'lucide-react';
import axios from 'axios';

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile || !thumbnail) {
      alert("Please select both video and thumbnail!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("videoFile", videoFile);
    formData.append("thumbnail", thumbnail);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/v1/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress);
        }
      });
      alert("✅ Video uploaded successfully!");
      // Reset form
      setTitle("");
      setDescription("");
      setVideoFile(null);
      setThumbnail(null);
      setUploadProgress(0);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-8 animate-fade-in'>
      <div className="mb-8">
        <h2 className='text-3xl font-bold text-white mb-2'>Upload Video</h2>
        <p className="text-[#aaa]">Share your content with the world</p>
      </div>

      <form onSubmit={handleSubmit} className='bg-[#1a1a1a] border border-[#272727] rounded-2xl p-8 space-y-6 shadow-2xl'>
        
        {/* Title Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <FileText className="w-4 h-4" />
            Title *
          </label>
          <input 
            type='text' 
            placeholder='Enter video title' 
            className='w-full bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg p-4 text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <FileText className="w-4 h-4" />
            Description *
          </label>
          <textarea 
            placeholder='Tell viewers about your video' 
            className='w-full bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg p-4 text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors min-h-[120px] resize-none'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Video File Upload */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Video className="w-4 h-4" />
            Video File *
          </label>
          <div className="relative">
            <input 
              type='file' 
              accept='video/*' 
              onChange={(e) => setVideoFile(e.target.files[0])}
              className='w-full text-sm text-[#aaa] file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#272727] file:text-white hover:file:bg-[#3f3f3f] file:cursor-pointer cursor-pointer'
              required
            />
          </div>
          {videoFile && (
            <p className="mt-2 text-sm text-[#aaa]">Selected: {videoFile.name}</p>
          )}
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Image className="w-4 h-4" />
            Thumbnail *
          </label>
          <div className="relative">
            <input 
              type='file' 
              accept='image/*'
              onChange={(e) => setThumbnail(e.target.files[0])}
              className='w-full text-sm text-[#aaa] file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#272727] file:text-white hover:file:bg-[#3f3f3f] file:cursor-pointer cursor-pointer'
              required
            />
          </div>
          {thumbnail && (
            <p className="mt-2 text-sm text-[#aaa]">Selected: {thumbnail.name}</p>
          )}
        </div>

        {/* Upload Progress */}
        {loading && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-[#aaa]">
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-[#272727] rounded-full h-2 overflow-hidden">
              <div 
                className="bg-red-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button 
          type='submit' 
          disabled={loading}
          className='w-full bg-red-600 py-4 rounded-lg font-semibold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2'
        >
          <UploadIcon className="w-5 h-5" />
          {loading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
};

export default Upload;