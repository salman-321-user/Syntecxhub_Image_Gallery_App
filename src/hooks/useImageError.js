import { useState, useCallback } from 'react';
import { FALLBACK_IMAGE } from '../utils/constants';

export const useImageError = (imageName) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const getImageSrc = useCallback((originalUrl) => {
    if (hasError) {
      return `${FALLBACK_IMAGE}${encodeURIComponent(imageName)}`;
    }
    return originalUrl;
  }, [hasError, imageName]);

  return {
    hasError,
    isLoaded,
    handleError,
    handleLoad,
    getImageSrc
  };
};