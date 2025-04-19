
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          <span className="font-heading">Bible Analyzer</span> &copy; {new Date().getFullYear()} Scripture Scholar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Terms
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
