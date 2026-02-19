import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

const FloatingButton = memo(({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-shadow z-40 group"
      aria-label="Add new image"
    >
      <FiPlus className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
    </motion.button>
  );
});

FloatingButton.displayName = 'FloatingButton';
export default FloatingButton;