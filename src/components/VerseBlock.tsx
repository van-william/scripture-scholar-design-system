
import { useState } from "react";
import { Bookmark, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface VerseBlockProps {
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  isBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onVerseClick?: () => void;
}

const VerseBlock = ({
  bookName,
  chapter,
  verse,
  text,
  isBookmarked = false,
  onBookmarkClick,
  onVerseClick,
}: VerseBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "flex items-start group py-2 relative transition-colors",
        isHovered ? "bg-accent/5" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-verse={`${bookName}-${chapter}-${verse}`}
    >
      <span 
        className="verse-number select-none" 
        title={`${bookName} ${chapter}:${verse}`}
      >
        {verse}
      </span>
      
      <div className="verse-text flex-grow" onClick={onVerseClick}>
        {text}
      </div>
      
      <div className={cn(
        "flex items-center ml-2",
        isBookmarked ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"
      )}>
        <button
          className={cn(
            "p-1 rounded-full",
            isBookmarked ? "text-accent" : "text-muted-foreground hover:text-accent"
          )}
          onClick={onBookmarkClick}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
        </button>
        
        <Link 
          to={`/commentary/${bookName}/${chapter}/${verse}`}
          className="p-1 rounded-full text-muted-foreground hover:text-accent"
          aria-label="View detailed commentary"
          title="View detailed commentary"
        >
          <BookOpen className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default VerseBlock;
