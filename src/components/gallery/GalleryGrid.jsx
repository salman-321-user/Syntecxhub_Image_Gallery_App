import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCard from './ImageCard';
import EmptyState from './EmptyState';

const GalleryGrid = memo(({ images, onRemoveImage }) => {
  if (images.length === 0) {
    return <EmptyState />;
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr"
    >
      <AnimatePresence mode="popLayout">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            onRemove={onRemoveImage}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

GalleryGrid.displayName = 'GalleryGrid';
export default GalleryGrid;