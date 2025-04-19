
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Bookmark, ClipboardList, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { recentlyViewed, bookmarkedVerses } from "@/data/mockBibleData";

interface StudyDashboardProps {
  className?: string;
  onNavigate: (book: string, chapter: number, verse?: number) => void;
}

const StudyDashboard = ({ className, onNavigate }: StudyDashboardProps) => {
  const [activeTab, setActiveTab] = useState("recent");

  // Mock study notes
  const studyNotes = [
    {
      id: 1,
      title: "Salvation by Faith",
      passages: ["Romans 3:21-26", "Ephesians 2:8-9"],
      updatedAt: "2 days ago",
      excerpt: "Notes on the doctrine of salvation by faith alone (sola fide)..."
    },
    {
      id: 2,
      title: "The Fruit of the Spirit",
      passages: ["Galatians 5:22-23"],
      updatedAt: "1 week ago",
      excerpt: "Examining each aspect of the fruit of the Spirit in detail..."
    },
    {
      id: 3,
      title: "Biblical Leadership",
      passages: ["1 Timothy 3:1-7", "Titus 1:5-9"],
      updatedAt: "2 weeks ago",
      excerpt: "Qualifications for elders and church leadership according to Paul..."
    }
  ];

  return (
    <div className={cn("p-4 lg:p-6", className)}>
      <h1 className="text-3xl font-heading font-bold mb-6">Study Dashboard</h1>
      
      <Tabs defaultValue="recent" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="recent" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span>Recent</span>
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="flex items-center gap-2">
            <Bookmark className="h-4 w-4" />
            <span>Bookmarks</span>
          </TabsTrigger>
          <TabsTrigger value="notes" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            <span>Notes</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Recently Viewed</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentlyViewed.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => onNavigate(item.book, item.chapter, item.verse)}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    {item.book} {item.chapter}:{item.verse}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Viewed 2 days ago
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bookmarks" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Bookmarked Verses</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {bookmarkedVerses.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate(item.book, item.chapter, item.verse)}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-accent" fill="currentColor" />
                    {item.book} {item.chapter}:{item.verse}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="notes" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Study Notes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {studyNotes.map((note) => (
              <Card key={note.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                  <CardDescription>Updated {note.updatedAt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {note.passages.map((passage, i) => (
                      <span key={i} className="reference-tag">{passage}</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{note.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyDashboard;
