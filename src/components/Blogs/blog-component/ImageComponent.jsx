import React, { useState, useEffect } from 'react';
import { compressBase64Image } from '../utils/compressBase64Image';

const ImageComponent = ({ base64Image, altText }) => {
  const [compressedImage, setCompressedImage] = useState('');

  useEffect(() => {
    const compressImage = async () => {
      try {
        const compressed = await compressBase64Image(base64Image);
        setCompressedImage(`data:image/jpeg;base64,${compressed}`);
      } catch (error) {
        console.error('Image compression failed:', error);
        setCompressedImage(`data:image/png;base64,${base64Image}`); 
      }
    };
    compressImage();
  }, [base64Image]);

  return (
    <img
      src={compressedImage}
      alt={altText || 'Compressed Image'}
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '8px',
      }}
    />
  );
};

export default ImageComponent;
