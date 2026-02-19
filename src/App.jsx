// App.jsx - Completely redesigned with better UI
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleBackground from './BubbleBackground';
import {
  FiPlus, FiSun, FiMoon, FiSearch, FiX, FiImage,
  FiUpload, FiCamera, FiGrid, FiHeart, FiStar
} from 'react-icons/fi';

const defaultImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1080&auto=format&fit=crop',
    name: 'Mountain Lake',
    description: 'Serene mountain lake with crystal clear waters reflecting the peaks'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500&auto=format', // FIXED
    name: 'Ocean Sunset',
    description: 'Beautiful sunset over the peaceful ocean with vibrant colors'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1080&auto=format&fit=crop',
    name: 'Forest Path',
    description: 'Mystical forest path covered in sunlight and lush greenery'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1080&auto=format&fit=crop',
    name: 'Desert Dunes',
    description: 'Rolling sand dunes at golden hour with dramatic shadows'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1080&auto=format&fit=crop',
    name: 'Waterfall',
    description: 'Majestic waterfall in tropical rainforest with lush surroundings'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/2895861/pexels-photo-2895861.jpeg?w=500', // FIXED
    name: 'Northern Lights',
    description: 'Aurora borealis dancing in the night sky over snowy mountains'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1080&auto=format&fit=crop',
    name: 'City Lights',
    description: 'Vibrant cityscape at night with glowing skyscrapers'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080&auto=format&fit=crop',
    name: 'Tropical Beach',
    description: 'Palm trees and turquoise waters with bright sunlight'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080&auto=format&fit=crop',
    name: 'Mountain Peak',
    description: 'Snow-capped mountain peak touching clouds above the clouds'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080&auto=format&fit=crop',
    name: 'Countryside Hills',
    description: 'Rolling hills and green meadows with a lone tree'
  }
];



const ImageCard = ({ image, index, onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setShowRemoveConfirm(true);
  };

  const confirmRemove = (e) => {
    e.stopPropagation();
    onRemove(image.id);
    setShowRemoveConfirm(false);
  };

  const cancelRemove = (e) => {
    e.stopPropagation();
    setShowRemoveConfirm(false);
  };

  const fallbackImage = `https://via.placeholder.com/500x500/667eea/ffffff?text=${encodeURIComponent(image.name)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
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
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <img
            src={imageError ? fallbackImage : image.url}
            alt={image.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            loading="lazy"
            onError={handleImageError}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Description Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 p-4"
                style={{ paddingBottom: '1.25rem' }}
              >
                <p className="text-white text-sm leading-relaxed drop-shadow-lg"
                  style={{
                    lineHeight: '1.5',
                    maxHeight: '4.5rem',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}>
                  {image.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Image Name Badge */}
        <motion.div
          className="absolute top-3 left-3"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            {image.name}
          </span>
        </motion.div>

        {/* Remove Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRemove}
          className="absolute top-3 right-3 p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors shadow-lg z-10"
        >
          <FiX className="w-4 h-4" />
        </motion.button>

        {/* Confirmation Dialog */}
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={confirmRemove}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors font-medium"
                  >
                    Yes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={cancelRemove}
                    className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    No
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AddImageModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: ''
  });
  const [previewUrl, setPreviewUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.url) {
      onAdd({
        ...formData,
        id: Date.now()
      });
      setFormData({ name: '', description: '', url: '' });
      setPreviewUrl('');
      onClose();
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, url });
    setPreviewUrl(url);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <FiUpload className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Image</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 rounded-2xl overflow-hidden"
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500?text=Invalid+Image+URL';
              }}
            />
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white"
              placeholder="Enter a descriptive name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white"
              rows="3"
              placeholder="Tell us about this image..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={handleUrlChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
          >
            Add to Gallery
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const FloatingButton = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-shadow z-40 group"
    >
      <FiPlus className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
    </motion.button>
  );
};

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onToggle}
      className="p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </motion.button>
  );
};

const SearchBar = ({ value, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative flex-1 max-w-md"
    >
      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search images by name..."
        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
      />
      {value && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <FiX className="w-4 h-4 text-gray-400" />
        </motion.button>
      )}
    </motion.div>
  );
};

const StatsBar = ({ total, showing }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl"
    >
      <div className="flex items-center gap-2">
        <FiGrid className="w-4 h-4 text-blue-500" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{showing}</span> of <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
        </span>
      </div>
      <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
      <div className="flex items-center gap-1">
        <FiStar className="w-4 h-4 text-yellow-500" />
        <span className="text-sm text-gray-600 dark:text-gray-300">Premium Gallery</span>
      </div>
    </motion.div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState(defaultImages);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleAddImage = (newImage) => {
    setImages([newImage, ...images]);
  };

  const handleRemoveImage = (imageId) => {
    setImages(images.filter(image => image.id !== imageId));
  };

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen transition-colors duration-500">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <BubbleBackground />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25">
              <FiCamera className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight bg-gradient-to-r from-white/70 via-white/90 to-white bg-clip-text text-transparent">
                Image Gallery
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Discover amazing photos</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-8">
          <StatsBar total={images.length} showing={filteredImages.length} />
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                index={index}
                onRemove={handleRemoveImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
              <FiImage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                No images found
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                Try a different search or add some images!
              </p>
            </div>
          </motion.div>
        )}

        {/* Floating Action Button */}
        <FloatingButton onClick={() => setIsModalOpen(true)} />

        {/* Add Image Modal */}
        <AnimatePresence mode="wait">
          {isModalOpen && (
            <AddImageModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAdd={handleAddImage}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;