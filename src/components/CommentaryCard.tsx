
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommentaryCardProps {
  title: string;
  content: string;
  references?: { text: string; link: string }[];
  greekWords?: { original: string; transliteration: string; definition: string }[];
  className?: string;
}

const CommentaryCard = ({
  title,
  content,
  references = [],
  greekWords = [],
  className,
}: CommentaryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn("commentary-container mb-4", className)}>
      <div 
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <button aria-label={isExpanded ? "Collapse" : "Expand"}>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <>
          <div className="prose prose-slate dark:prose-invert max-w-none mb-4">
            {content}
          </div>
          
          {greekWords.length > 0 && (
            <div className="mb-4">
              <h4 className="font-heading text-sm font-semibold mb-2 text-secondary">Greek Word Study</h4>
              <div className="space-y-2">
                {greekWords.map((word, index) => (
                  <div key={index} className="bg-muted p-2 rounded text-sm">
                    <span className="greek-word">{word.original}</span>
                    <span className="text-muted-foreground ml-2">({word.transliteration})</span>
                    <p className="mt-1">{word.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {references.length > 0 && (
            <div>
              <h4 className="font-heading text-sm font-semibold mb-2 text-secondary">Cross References</h4>
              <div className="flex flex-wrap gap-2">
                {references.map((ref, index) => (
                  <a key={index} href={ref.link} className="reference-tag">
                    {ref.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentaryCard;
