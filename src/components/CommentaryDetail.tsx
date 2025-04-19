
import { useState } from "react";
import { ChevronLeft, ExternalLink, Book, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommentaryDetailProps {
  bookName: string;
  chapter: number;
  verse: number;
  onBack: () => void;
  className?: string;
}

const CommentaryDetail = ({
  bookName,
  chapter,
  verse,
  onBack,
  className
}: CommentaryDetailProps) => {
  const [activeTab, setActiveTab] = useState("commentary");

  // Mock data - in a real app this would come from an API
  const commentary = {
    title: `${bookName} ${chapter}:${verse} - In-Depth Commentary`,
    content: `
      <p class="mb-4">This verse demonstrates the core theological concept central to Christian soteriology. The text employs a conditional structure that emphasizes divine initiative while maintaining human responsibility through faith.</p>
      
      <p class="mb-4">In the original language, the emphasis falls on God's love as the motivating action, with the giving of the Son as the demonstration of that love. The purpose clause introduced by "that" (Greek: hina) shows the intended outcome of God's giving.</p>
      
      <p class="mb-4">Early church fathers such as Augustine and Chrysostom emphasized different aspects of this text in their interpretations, with Augustine focusing on divine election and Chrysostom on human response. The Reformation period saw this verse become central to discussions of justification by faith.</p>
    `,
    crossReferences: [
      { reference: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
      { reference: "Romans 8:32", text: "He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?" },
      { reference: "1 John 4:9-10", text: "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him. This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins." },
      { reference: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast." }
    ],
    greekAnalysis: [
      {
        word: "ἀγαπάω (agapaō)",
        strong: "G25",
        form: "Aorist Indicative - 3rd Person Singular",
        definition: "To love, value, esteem, feel or manifest generous concern for, be faithful towards",
        usage: "This term emphasizes volitional love rather than emotional love. In the NT it often refers to divine love, a deliberate choice to act for another's highest good."
      },
      {
        word: "κόσμος (kosmos)",
        strong: "G2889",
        form: "Noun - Accusative Masculine Singular",
        definition: "The world, universe; worldly affairs; the inhabitants of the world; adornment",
        usage: "In John's writings, kosmos often has a negative connotation (world opposed to God), but here it emphasizes the scope of God's love—for all humanity."
      },
      {
        word: "μονογενής (monogenēs)",
        strong: "G3439",
        form: "Adjective - Accusative Masculine Singular",
        definition: "Only begotten, only, unique, of only one kind",
        usage: "Emphasizes the uniqueness of Jesus as God's Son. Not merely 'only' but 'one and only,' 'unique,' highlighting Jesus' special relationship with the Father."
      }
    ],
    theologicalInsights: [
      {
        theme: "God's Love",
        content: "The passage reveals God's love as both universal (for the world) and sacrificial (gave his Son). This divine love is not based on human merit but precedes and enables human response."
      },
      {
        theme: "Soteriology",
        content: "The verse presents salvation in terms of rescue from perishing and the gift of eternal life. The means of this salvation is explicitly through faith ('whoever believes')."
      },
      {
        theme: "Christology",
        content: "Jesus is presented as God's 'one and only Son,' emphasizing his unique relationship with the Father and his essential role in God's redemptive plan."
      },
      {
        theme: "Eschatology",
        content: "The contrast between perishing and eternal life points to ultimate destinies, connecting present belief with future outcomes."
      }
    ],
    applications: [
      {
        title: "Understanding Divine Love",
        content: "This verse challenges our limited concepts of love, revealing God's love as sacrificial, undeserved, and universal in scope."
      },
      {
        title: "Faith as Response",
        content: "The appropriate response to God's love is faith—active trust in Jesus. This challenges both passive indifference and attempts to earn God's favor."
      },
      {
        title: "Mission and Evangelism",
        content: "This verse provides motivation for sharing the gospel—God loves all people and desires none to perish. Our mission extends to everyone, regardless of background."
      },
      {
        title: "Pastoral Care",
        content: "When counseling those who doubt God's love, this verse provides assurance that God's love is demonstrated in the most powerful way possible—the giving of his Son."
      }
    ]
  };

  return (
    <div className={cn("container py-6", className)}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl font-heading font-semibold">{commentary.title}</h1>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
      
      <Tabs defaultValue="commentary" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
          <TabsTrigger value="greek">Greek Analysis</TabsTrigger>
          <TabsTrigger value="theological">Theological</TabsTrigger>
          <TabsTrigger value="application">Application</TabsTrigger>
        </TabsList>
        
        <TabsContent value="commentary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Detailed Commentary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: commentary.content }} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Cross References</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commentary.crossReferences.map((ref, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-4 py-2">
                    <p className="font-heading font-semibold text-sm">{ref.reference}</p>
                    <p className="text-sm mt-1">{ref.text}</p>
                    <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Open in reading view
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="greek" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Greek Word Study</h2>
          {commentary.greekAnalysis.map((word, idx) => (
            <Card key={idx}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-start justify-between">
                  <span className="greek-word text-lg">{word.word}</span>
                  <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    {word.strong}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Form</h4>
                    <p className="text-sm text-muted-foreground">{word.form}</p>
                    
                    <h4 className="text-sm font-semibold mt-4 mb-1">Definition</h4>
                    <p className="text-sm text-muted-foreground">{word.definition}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Usage in Context</h4>
                    <p className="text-sm">{word.usage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="theological" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Theological Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commentary.theologicalInsights.map((insight, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-heading flex items-center">
                    <Book className="h-4 w-4 mr-2 text-accent" />
                    {insight.theme}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{insight.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="application" className="space-y-4">
          <h2 className="text-xl font-heading font-semibold">Practical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commentary.applications.map((app, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-heading">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{app.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommentaryDetail;
