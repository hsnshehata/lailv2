import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUploadSuccess, multiple = false, maxFiles = 10 }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (multiple) {
      const filesArray = files.slice(0, maxFiles);
      setImages([...images, ...filesArray]);
    } else {
      setImages([files[0]]);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));

      const response = await axios.post('/api/upload/multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onUploadSuccess(response.data.data);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('فشل الرفع، حاول مرة أخرى.');
    } finally {
      setLoading(false);
      setImages([]);
    }
  };

  return (
    <div>
      <input type={multiple ? 'file' : 'file'} multiple={multiple} onChange={handleImageChange} accept="image/*" />
      <button onClick={handleUpload} disabled={loading || images.length === 0}>
        {loading ? 'تحميل...' : 'رفع الصور'}
      </button>
      {images.length > 0 && (
        <div>
          <h4>تحديد الصور:</h4>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;