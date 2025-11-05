import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Video, Image, X } from 'lucide-react';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const UploadVideo = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null,
  });
  const [previews, setPreviews] = useState({
    video: null,
    thumbnail: null,
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setFormData(prev => ({ ...prev, [name]: file }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({ ...prev, [name === 'videoFile' ? 'video' : 'thumbnail']: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = (type) => {
    if (type === 'video') {
      setFormData(prev => ({ ...prev, videoFile: null }));
      setPreviews(prev => ({ ...prev, video: null }));
    } else {
      setFormData(prev => ({ ...prev, thumbnail: null }));
      setPreviews(prev => ({ ...prev, thumbnail: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.videoFile || !formData.thumbnail) {
      alert('Please select both video and thumbnail');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('videoFile', formData.videoFile);
      data.append('thumbnail', formData.thumbnail);

      const response = await api.post('/videos/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress);
        },
      });

      if (response.data.success) {
        alert('✅ Video uploaded successfully!');
        navigate('/');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert(err.response?.data?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Upload Video</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Video Upload */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8">
              <div className="text-center">
                {previews.video ? (
                  <div className="relative">
                    <video 
                      src={previews.video} 
                      controls 
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile('video')}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Video className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <label className="cursor-pointer">
                      <span className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block">
                        Select Video
                      </span>
                      <input
                        type="file"
                        name="videoFile"
                        accept="video/*"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">MP4, MOV, AVI (Max 100MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Upload */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8">
              <div className="text-center">
                {previews.thumbnail ? (
                  <div className="relative">
                    <img 
                      src={previews.thumbnail} 
                      alt="Thumbnail preview" 
                      className="max-h-48 mx-auto rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile('thumbnail')}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Image className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <label className="cursor-pointer">
                      <span className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block">
                        Select Thumbnail
                      </span>
                      <input
                        type="file"
                        name="thumbnail"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG (Max 2MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter video title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell viewers about your video"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                required
              />
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-700">Uploading...</span>
                  <span className="text-sm font-medium text-blue-700">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={uploading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                {uploading ? 'Uploading...' : 'Upload Video'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadVideo;
