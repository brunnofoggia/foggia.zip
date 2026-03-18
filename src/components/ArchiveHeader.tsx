import { Folder, Zap } from "lucide-react";

interface ArchiveHeaderProps {
  totalProjects: number;
}

const ArchiveHeader = ({ totalProjects }: ArchiveHeaderProps) => {
  return (
    <header className="border-b pb-8 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Folder className="h-5 w-5 text-accent" />
        <span className="font-mono text-sm text-muted-foreground">root/</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">
        foggia.zip
      </h1>
      <p className="flex items-center gap-2 font-body text-sm text-muted-foreground italic">
        <Zap className="h-4 w-4 text-accent shrink-0" fill="currentColor" strokeWidth={0} />
        I am not regular. I will not give you regular.
      </p>
    </header>
  );
};

export default ArchiveHeader;
