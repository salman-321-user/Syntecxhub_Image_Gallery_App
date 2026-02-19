import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'w-10 h-10' }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${size} border-4 border-blue-500 border-t-transparent rounded-full`}
      />
    </div>
  );
};

export default React.memo(LoadingSpinner);