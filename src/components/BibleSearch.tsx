
import { useState } from "react";
import { Search, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchResult {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

interface BibleSearchProps {
  onResultClick: (result: SearchResult) => void;
  className?: string;
}

const BibleSearch = ({ onResultClick, className }: BibleSearchProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Mock search function - would be replaced with actual search logic
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Mock results
    setTimeout(() => {
      // This is dummy data - in a real app, this would come from API or search index
      if (query.toLowerCase().includes("love")) {
        setSearchResults([
          { book: "1 John", chapter: 4, verse: 8, text: "Whoever does not love does not know God, because God is love." },
          { book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
          { book: "1 Corinthians", chapter: 13, verse: 4, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." }
        ]);
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
      setIsExpanded(true);
    }, 500);
  };

  const clearSearch = () => {
    setQuery("");
    setSearchResults([]);
    setIsExpanded(false);
  };

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="search"
          placeholder="Search scriptures..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10"
        />
        {query ? (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <XCircle className="h-4 w-4" />
          </button>
        ) : null}
        <Button
          type="submit"
          size="sm"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3"
          disabled={isSearching || !query.trim()}
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {isExpanded && searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-card shadow-md rounded-md border overflow-hidden">
          <div className="max-h-[300px] overflow-y-auto p-2">
            {searchResults.map((result, index) => (
              <button
                key={index}
                className="w-full text-left p-2 hover:bg-accent/10 rounded transition-colors"
                onClick={() => {
                  onResultClick(result);
                  setIsExpanded(false);
                }}
              >
                <div className="flex justify-between">
                  <span className="font-medium font-heading text-sm">
                    {result.book} {result.chapter}:{result.verse}
                  </span>
                </div>
                <p className="text-sm line-clamp-2 text-muted-foreground mt-1">
                  {result.text}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {isExpanded && searchResults.length === 0 && !isSearching && query && (
        <div className="absolute z-10 mt-1 w-full bg-card shadow-md rounded-md border p-4 text-center">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default BibleSearch;
