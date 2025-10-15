// src/pages/UploadVideo.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';
import { videoAPI } from '../services/api';
import toast from 'react-hot-toast';

const UploadVideo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview(null);
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setThumbnailPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile || !thumbnail) {
      toast.error('Video file and thumbnail are required');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('videoFile', videoFile);
    data.append('thumbnail', thumbnail);

    setLoading(true);
    try {
      await videoAPI.uploadVideo(data);
      toast.success('Video uploaded successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Upload Video</h1>

      <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl">
        <div className="space-y-6">
          {/* Video Upload */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Video File <span className="text-red-500">*</span>
            </label>
            {videoPreview ? (
              <div className="relative">
                <video
                  src={videoPreview}
                  controls
                  className="w-full aspect-video bg-black rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeVideo}
                  className="absolute top-4 right-4 p-2 bg-red-500 hover:bg-red-600 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-primary transition bg-gray-700">
                <Upload size={48} className="text-gray-400 mb-4" />
                <p className="text-gray-400 text-center px-4">
                  Click to upload video
                  <br />
                  <span className="text-sm">MP4, WebM, or OGG (max 100MB)</span>
                </p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Thumbnail <span className="text-red-500">*</span>
            </label>
            {thumbnailPreview ? (
              <div className="relative inline-block">
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail preview"
                  className="w-full max-w-md aspect-video object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="absolute top-4 right-4 p-2 bg-red-500 hover:bg-red-600 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full max-w-md h-48 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-primary transition bg-gray-700">
                <Upload size={40} className="text-gray-400 mb-3" />
                <p className="text-gray-400 text-center px-4">
                  Click to upload thumbnail
                  <br />
                  <span className="text-sm">JPG, PNG, or WebP</span>
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
              placeholder="Enter video title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white resize-none"
              placeholder="Tell viewers about your video"
              required
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-primary hover:bg-red-600 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Uploading...' : 'Upload Video'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadVideo;