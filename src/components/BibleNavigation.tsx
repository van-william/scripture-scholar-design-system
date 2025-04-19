
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BibleNavigationProps {
  currentBook: string;
  currentChapter: number;
  onBookChange: (book: string) => void;
  onChapterChange: (chapter: number) => void;
  bibleBooks: { name: string; chapters: number }[];
}

const BibleNavigation = ({
  currentBook,
  currentChapter,
  onBookChange,
  onChapterChange,
  bibleBooks,
}: BibleNavigationProps) => {
  const [activeBookIndex, setActiveBookIndex] = useState(
    bibleBooks.findIndex((book) => book.name === currentBook)
  );
  
  const activeBook = bibleBooks[activeBookIndex];
  const totalChapters = activeBook?.chapters || 1;
  
  const handlePreviousChapter = () => {
    if (currentChapter > 1) {
      onChapterChange(currentChapter - 1);
    } else if (activeBookIndex > 0) {
      // Go to the last chapter of previous book
      const prevBook = bibleBooks[activeBookIndex - 1];
      setActiveBookIndex(activeBookIndex - 1);
      onBookChange(prevBook.name);
      onChapterChange(prevBook.chapters);
    }
  };
  
  const handleNextChapter = () => {
    if (currentChapter < totalChapters) {
      onChapterChange(currentChapter + 1);
    } else if (activeBookIndex < bibleBooks.length - 1) {
      // Go to the first chapter of next book
      const nextBook = bibleBooks[activeBookIndex + 1];
      setActiveBookIndex(activeBookIndex + 1);
      onBookChange(nextBook.name);
      onChapterChange(1);
    }
  };
  
  return (
    <div className="flex items-center space-x-2 my-4">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={handlePreviousChapter}
        aria-label="Previous chapter"
        className="bible-nav-button"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bible-nav-button flex-1 justify-between">
            <span>{currentBook} {currentChapter}</span>
            <ChevronsUpDown className="h-4 w-4 ml-2 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-[60vh] overflow-y-auto w-[200px]">
          {bibleBooks.map((book, index) => (
            <DropdownMenuItem 
              key={book.name}
              className={activeBookIndex === index ? "bg-accent/10 font-semibold" : ""}
              onClick={() => {
                setActiveBookIndex(index);
                onBookChange(book.name);
                onChapterChange(1);
              }}
            >
              {book.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bible-nav-button w-[80px]">
            Ch {currentChapter}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
          {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => (
            <DropdownMenuItem 
              key={chapter}
              className={currentChapter === chapter ? "bg-accent/10 font-semibold" : ""}
              onClick={() => onChapterChange(chapter)}
            >
              {chapter}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={handleNextChapter}
        aria-label="Next chapter"
        className="bible-nav-button"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default BibleNavigation;
