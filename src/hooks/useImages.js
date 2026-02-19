import { useState, useCallback, useMemo } from 'react';
import { defaultImages } from '../utils/constants';

export const useImages = () => {
  const [images, setImages] = useState(defaultImages);

  const addImage = useCallback((newImage) => {
    setImages(prev => [{
      ...newImage,
      id: Date.now()
    }, ...prev]);
  }, []);

  const removeImage = useCallback((imageId) => {
    setImages(prev => prev.filter(image => image.id !== imageId));
  }, []);

  const totalImages = useMemo(() => images.length, [images]);

  return {
    images,
    addImage,
    removeImage,
    totalImages
  };
};