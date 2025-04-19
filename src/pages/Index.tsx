import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReadingView from "@/components/ReadingView";
import StudyDashboard from "@/components/StudyDashboard";
import Footer from "@/components/Footer";
import { BookOpen, LayoutDashboard } from "lucide-react";

const Index = () => {
  const [activeView, setActiveView] = useState<"reading" | "dashboard">("reading");
  const [readingState, setReadingState] = useState({
    book: "John",
    chapter: 3,
    verse: undefined as number | undefined
  });

  const handleNavigateToPassage = (book: string, chapter: number, verse?: number) => {
    setReadingState({ book, chapter, verse });
    setActiveView("reading");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Tabs 
        defaultValue="reading" 
        value={activeView} 
        onValueChange={(v) => setActiveView(v as "reading" | "dashboard")}
        className="flex-1 flex flex-col"
      >
        <div className="border-b">
          <div className="container flex h-16 items-center">
            <TabsList className="ml-auto mr-auto">
              <TabsTrigger value="reading" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Reading View</span>
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Study Dashboard</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <TabsContent value="reading" className="flex-1 p-0">
          <ReadingView />
        </TabsContent>
        
        <TabsContent value="dashboard" className="flex-1">
          <StudyDashboard onNavigate={handleNavigateToPassage} />
        </TabsContent>
      </Tabs>
      
      <Footer />
    </div>
  );
};

export default Index;
