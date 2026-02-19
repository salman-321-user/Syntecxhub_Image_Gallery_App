import { useState, useMemo, useCallback } from 'react';
import { debounce } from '../utils/helpers';

export const useSearch = (items, searchKey = 'name') => {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    
    const searchTerm = query.toLowerCase().trim();
    return items.filter(item => 
      item[searchKey]?.toLowerCase().includes(searchTerm)
    );
  }, [items, query, searchKey]);

  const setSearchQuery = useCallback((value) => {
    setQuery(value);
  }, []);

  return {
    query,
    setSearchQuery,
    filteredItems,
    resultsCount: filteredItems.length
  };
};