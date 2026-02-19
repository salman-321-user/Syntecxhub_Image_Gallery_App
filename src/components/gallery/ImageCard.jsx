import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useImageError } from '../../hooks/useImageError';
import LoadingSpinner from '../ui/LoadingSpinner';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const ImageCard = memo(({ image, index, onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const { isLoaded, handleError, handleLoad, getImageSrc } = useImageError(image.name);

  const handleRemove = useCallback((e) => {
    e.stopPropagation();
    setShowRemoveConfirm(true);
  }, []);

  const confirmRemove = useCallback((e) => {
    e.stopPropagation();
    onRemove(image.id);
    setShowRemoveConfirm(false);
  }, [image.id, onRemove]);

  const cancelRemove = useCallback((e) => {
    e.stopPropagation();
    setShowRemoveConfirm(false);
  }, []);

  return (
    <motion.div
      layout
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 transform-gpu">
        <motion.div
          className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {!isLoaded && <LoadingSpinner />}

          <img
            src={getImageSrc(image.url)}
            alt={image.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onError={handleError}
            onLoad={handleLoad}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 p-4"
              >
                <p className="text-white text-sm leading-relaxed drop-shadow-lg line-clamp-2">
                  {image.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute top-3 left-3"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            {image.name}
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRemove}
          className="absolute top-3 right-3 p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors shadow-lg z-10"
          aria-label="Remove image"
        >
          <FiX className="w-4 h-4" />
        </motion.button>

        <AnimatePresence>
          {showRemoveConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="text-center"
              >
                <p className="text-white text-sm font-medium mb-3">Remove this image?</p>
                <div className="flex gap-2">
                  <button
                    onClick={confirmRemove}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors font-medium"
                  >
                    Yes
                  </button>
                  <button
                    onClick={cancelRemove}
                    className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    No
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

ImageCard.displayName = 'ImageCard';
export default ImageCard;