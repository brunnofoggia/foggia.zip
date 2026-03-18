import ArchiveHeader from "@/components/ArchiveHeader";
import ProjectEntry, { type Project } from "@/components/ProjectEntry";

const projects: Project[] = [
  {
    name: "instagram",
    url: "https://www.instagram.com/brunnofoggia",
    description: "Photos, stories and reels",
    category: "Social",
    status: "active",
    version: "1.0",
    icon: "instagram",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/brunnofoggia",
    description: "Professional network and career",
    category: "Professional",
    status: "active",
    version: "1.0",
    icon: "linkedin",
  },
  {
    name: "github",
    url: "https://github.com/brunnofoggia",
    description: "Open source projects and code",
    category: "Dev",
    status: "active",
    version: "1.0",
    icon: "github",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-16 md:py-24">
        <ArchiveHeader totalProjects={projects.length} />

        <section>
          <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Contents
          </h2>

          <div className="border rounded-md px-4">
            {projects.map((project) => (
              <ProjectEntry key={project.name} project={project} />
            ))}
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mt-4">
            <span>Items: {projects.length}</span>
            <span className="text-border">│</span>
            <span>Status: In Progress</span>
            <span className="text-border">│</span>
            <span>Type: Directory</span>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-2xl mx-auto px-6 pb-12">
        <div className="border-t pt-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>— End of Archive —</span>
          <span>foggia.zip © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
