export interface SearchSuggestion {
  text: string;
  url?: string;
}

export interface SearchResult {
  title: string;
  description?: string;
  categoryPath: string[];
  date: string;
  category?: string;
  tags?: string[];
  image?: string;
  url?: string;
  featured?: boolean;
  relevance?: number;
  readTime?: string; // e.g., "6 minute read"
  author?: string; // e.g., "By CIPFA Staff"
  faqQuestion?: string; // For FAQ featured answers
}
