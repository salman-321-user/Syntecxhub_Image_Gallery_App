import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useImages } from './hooks/useImages';
import { useSearch } from './hooks/useSearch';

// Components
import BubbleBackground from './components/background/BubbleBackground';
import Header from './components/layout/Header';
import StatsBar from './components/layout/StatsBar';
import GalleryGrid from './components/gallery/GalleryGrid';
import FloatingButton from './components/layout/FloatingButton';
import AddImageModal from './components/modals/AddImageModal';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { images, addImage, removeImage, totalImages } = useImages();
  const { query: searchQuery, setSearchQuery, filteredItems: filteredImages, resultsCount } = useSearch(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddImage = useCallback((newImage) => {
    addImage(newImage);
  }, [addImage]);

  const handleRemoveImage = useCallback((imageId) => {
    removeImage(imageId);
  }, [removeImage]);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <BubbleBackground />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isDark={isDark}
          onThemeToggle={toggleTheme}
        />

        <StatsBar total={totalImages} showing={resultsCount} />

        <GalleryGrid
          images={filteredImages}
          onRemoveImage={handleRemoveImage}
        />

        <FloatingButton onClick={toggleModal} />

        <AnimatePresence mode="wait">
          {isModalOpen && (
            <AddImageModal
              isOpen={isModalOpen}
              onClose={toggleModal}
              onAdd={handleAddImage}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;