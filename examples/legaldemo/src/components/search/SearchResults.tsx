import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { SearchResult } from './search.types';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  sortBy: 'relevance' | 'date';
  onSortChange: (sort: 'relevance' | 'date') => void;
  isSearching: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  sortBy,
  onSortChange,
  isSearching,
}) => {
  // Find featured answer (if query matches a common question)
  // Prioritize FAQ questions, then title, then description
  const featuredAnswer = results.find(
    (result) =>
      result.featured &&
      (result.faqQuestion?.toLowerCase().includes(query.toLowerCase()) ||
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description?.toLowerCase().includes(query.toLowerCase())),
  ) || results.find((result) => result.featured && result.faqQuestion);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="search-results mt-8">
      {/* Featured Answer */}
      {featuredAnswer && (
        <div className="featured-answer mb-8 p-6 bg-purple-50/30 border-l-4 border-[#312C62] rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#312C62] mb-3">
                Q: {featuredAnswer.faqQuestion || featuredAnswer.title}
              </h3>
              {featuredAnswer.description && (
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#312C62]">A:</span>{' '}
                  {featuredAnswer.description}
                </p>
              )}
            </div>
            {featuredAnswer.image && (
              <div className="hidden md:block w-32 h-32 flex-shrink-0">
                <img
                  src={featuredAnswer.image}
                  alt={featuredAnswer.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="results-header flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-[#312C62]">Search results</h2>
          <span className="text-sm text-gray-600">
            Showing {results.length} result{results.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onSortChange('relevance')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                sortBy === 'relevance'
                  ? 'bg-[#312C62] text-white hover:bg-[#312C62]/90'
                  : 'bg-white text-[#312C62] border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Relevance
            </button>
            <button
              type="button"
              onClick={() => onSortChange('date')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                sortBy === 'date'
                  ? 'bg-[#312C62] text-white hover:bg-[#312C62]/90'
                  : 'bg-white text-[#312C62] border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Date
              {sortBy === 'date' && (
                <ArrowRight className="h-3 w-3 rotate-90" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="results-list space-y-0">
        {results
          .filter((result) => !result.featured || result !== featuredAnswer)
          .map((result, index) => (
            <div
              key={index}
              className="result-item py-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  {/* Category Tag and Read Time */}
                  <div className="flex items-center gap-3 mb-2">
                    {result.category && (
                      <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">
                        {result.category}
                      </span>
                    )}
                    {result.readTime && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{result.readTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#312C62] mb-2 hover:text-[#007BFF] cursor-pointer">
                    {result.title}
                  </h3>

                  {/* Category Path */}
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span>{result.categoryPath.join(' > ')}</span>
                  </div>

                  {/* Description */}
                  {result.description && (
                    <p className="text-base text-gray-700 mb-2 line-clamp-2">
                      {result.description}
                      {result.author && (
                        <span className="block mt-1 text-sm text-gray-600">{result.author}</span>
                      )}
                    </p>
                  )}

                  {/* Tags */}
                  {result.tags && result.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {result.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-500">{formatDateShort(result.date)}</span>
                    <span className="text-sm text-gray-500">{formatDate(result.date)}</span>
                  </div>
                </div>

                {/* Image */}
                {result.image && (
                  <div className="w-full md:w-48 h-32 flex-shrink-0">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-[#007BFF]" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
