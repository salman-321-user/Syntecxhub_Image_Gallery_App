import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiStar } from 'react-icons/fi';

const StatsBar = memo(({ total, showing }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl mb-8"
    >
      <div className="flex items-center gap-2">
        <FiGrid className="w-4 h-4 text-blue-500" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{showing}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
        </span>
      </div>
      <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
      <div className="flex items-center gap-1">
        <FiStar className="w-4 h-4 text-yellow-500" />
        <span className="text-sm text-gray-600 dark:text-gray-300">Premium Gallery</span>
      </div>
    </motion.div>
  );
});

StatsBar.displayName = 'StatsBar';
export default StatsBar;