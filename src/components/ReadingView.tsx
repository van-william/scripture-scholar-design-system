
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, BookOpen, FileText, SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";
import VerseBlock from "./VerseBlock";
import CommentaryCard from "./CommentaryCard";
import BibleNavigation from "./BibleNavigation";
import BibleSearch from "./BibleSearch";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { getScripture, getCommentary, bibleBooks } from "@/data/mockBibleData";

interface ReadingViewProps {
  className?: string;
}

const ReadingView = ({ className }: ReadingViewProps) => {
  // State for current passage
  const [currentBook, setCurrentBook] = useState("John");
  const [currentChapter, setCurrentChapter] = useState(3);
  const [scripture, setScripture] = useState<{ verse: number; text: string }[]>([]);
  const [commentary, setCommentary] = useState<any>(null);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [isCommentaryOpen, setIsCommentaryOpen] = useState(true);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<string>>(new Set());
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");

  // Load scripture and commentary when book/chapter changes
  useEffect(() => {
    const verses = getScripture(currentBook, currentChapter);
    setScripture(verses);
    setCommentary(getCommentary(currentBook, currentChapter));
    setSelectedVerse(null);
  }, [currentBook, currentChapter]);

  // Update commentary when verse is selected
  useEffect(() => {
    if (selectedVerse) {
      setCommentary(getCommentary(currentBook, currentChapter, selectedVerse));
    } else {
      setCommentary(getCommentary(currentBook, currentChapter));
    }
  }, [selectedVerse, currentBook, currentChapter]);

  // Handle verse click
  const handleVerseClick = (verse: number) => {
    setSelectedVerse(verse === selectedVerse ? null : verse);
  };

  // Handle bookmark toggle
  const toggleBookmark = (book: string, chapter: number, verse: number) => {
    const key = `${book}-${chapter}-${verse}`;
    setBookmarkedVerses(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(key)) {
        newBookmarks.delete(key);
      } else {
        newBookmarks.add(key);
      }
      return newBookmarks;
    });
  };

  // Handle search result click
  const handleSearchResultClick = (result: { book: string; chapter: number; verse: number }) => {
    setCurrentBook(result.book);
    setCurrentChapter(result.chapter);
    setSelectedVerse(result.verse);
  };

  // Font size classes
  const fontSizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Top navigation bar */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-heading font-semibold">Bible Analyzer</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <BibleSearch onResultClick={handleSearchResultClick} />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize("sm")}
              className={cn(
                "h-8 w-8 p-0",
                fontSize === "sm" && "bg-accent/10 border-accent"
              )}
            >
              A
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize("base")}
              className={cn(
                "h-8 w-8 p-0",
                fontSize === "base" && "bg-accent/10 border-accent"
              )}
            >
              A
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize("lg")}
              className={cn(
                "h-8 w-8 p-0",
                fontSize === "lg" && "bg-accent/10 border-accent"
              )}
            >
              A
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize("xl")}
              className={cn(
                "h-8 w-8 p-0",
                fontSize === "xl" && "bg-accent/10 border-accent"
              )}
            >
              A
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="sm:hidden p-4">
        <BibleSearch onResultClick={handleSearchResultClick} />
      </div>

      <BibleNavigation
        currentBook={currentBook}
        currentChapter={currentChapter}
        onBookChange={setCurrentBook}
        onChapterChange={setCurrentChapter}
        bibleBooks={bibleBooks}
      />

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Scripture pane */}
        <div className={cn(
          "flex-1 overflow-y-auto p-4 lg:p-6",
          fontSizeClasses[fontSize]
        )}>
          <div className="scripture-container">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              {currentBook} {currentChapter}
            </h2>
            <div className="space-y-1">
              {scripture.map((item) => (
                <VerseBlock
                  key={item.verse}
                  bookName={currentBook}
                  chapter={currentChapter}
                  verse={item.verse}
                  text={item.text}
                  isBookmarked={bookmarkedVerses.has(`${currentBook}-${currentChapter}-${item.verse}`)}
                  onBookmarkClick={() => toggleBookmark(currentBook, currentChapter, item.verse)}
                  onVerseClick={() => handleVerseClick(item.verse)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Commentary pane - collapsible on mobile */}
        <div className={cn(
          "lg:w-[400px] border-t lg:border-t-0 lg:border-l transition-all duration-300 overflow-hidden",
          isCommentaryOpen ? "flex flex-col" : "h-12 lg:w-12"
        )}>
          <button
            onClick={() => setIsCommentaryOpen(!isCommentaryOpen)}
            className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b"
          >
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              {isCommentaryOpen && <span className="font-heading">Commentary</span>}
            </div>
            {isCommentaryOpen ? (
              <ChevronRight className="h-5 w-5 lg:hidden" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>

          {isCommentaryOpen && (
            <div className={cn(
              "flex-1 overflow-y-auto p-4 lg:p-6",
              fontSizeClasses[fontSize]
            )}>
              {commentary && (
                <CommentaryCard
                  title={commentary.title}
                  content={commentary.content}
                  references={commentary.references}
                  greekWords={commentary.greekWords}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingView;
