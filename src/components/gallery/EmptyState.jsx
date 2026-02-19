import React from 'react';
import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

const EmptyState = () => {
  return (
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
  );
};

export default React.memo(EmptyState);