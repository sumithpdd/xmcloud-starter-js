import React, { useState, useMemo } from 'react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { cipfaSearchData, cipfaSuggestions } from './searchData';
import type { SearchResult, SearchSuggestion } from './search.types';

export const Default: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance');
  const [isSearching, setIsSearching] = useState(false);

  // Filter suggestions based on query
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return cipfaSuggestions.filter((suggestion) => suggestion.text.toLowerCase().includes(query));
  }, [searchQuery]);

  // Perform search
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setShowSuggestions(false);

    // Simulate search delay
    setTimeout(() => {
      const queryLower = query.toLowerCase();
      const results = cipfaSearchData.filter(
        (item) =>
          item.title.toLowerCase().includes(queryLower) ||
          item.faqQuestion?.toLowerCase().includes(queryLower) ||
          item.description?.toLowerCase().includes(queryLower) ||
          item.categoryPath.some((cat) => cat.toLowerCase().includes(queryLower)) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(queryLower))
      );

      // Sort results
      const sortedResults =
        sortBy === 'date'
          ? [...results].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          : results;

      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 300);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    performSearch(query);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.text);
    performSearch(suggestion.text);
  };

  const handleSortChange = (newSort: 'relevance' | 'date') => {
    setSortBy(newSort);
    if (searchResults.length > 0) {
      const sortedResults =
        newSort === 'date'
          ? [...searchResults].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          : [...searchResults].sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
      setSearchResults(sortedResults);
    }
  };

  return (
    <div className="search-component w-full max-w-7xl mx-auto px-4 py-8">
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={handleSearch}
        suggestions={showSuggestions ? filteredSuggestions : []}
        onSuggestionClick={handleSuggestionClick}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />

      {searchResults.length > 0 && (
        <SearchResults
          results={searchResults}
          query={searchQuery}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          isSearching={isSearching}
        />
      )}

      {searchQuery && searchResults.length === 0 && !isSearching && (
        <div className="mt-8 text-center text-gray-600">
          <p>No results found for &quot;{searchQuery}&quot;</p>
          <p className="text-sm mt-2">Try a different search term</p>
        </div>
      )}
    </div>
  );
};
