import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiCamera } from 'react-icons/fi';
import SearchBar from '../ui/SearchBar';
import ThemeToggle from '../ui/ThemeToggle';

const Header = memo(({ searchQuery, onSearchChange, isDark, onThemeToggle }) => {
  return (
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
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </div>
  );
});

Header.displayName = 'Header';
export default Header;