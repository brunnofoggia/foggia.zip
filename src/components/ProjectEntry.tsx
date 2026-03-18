import { Instagram, Linkedin, Github, Folder, ArrowUpRight, type LucideIcon } from "lucide-react";

export interface Project {
  name: string;
  url: string;
  description: string;
  category: string;
  status: "active" | "wip" | "archived";
  version: string;
  icon?: string;
}

const outlineIcons = new Set(["instagram"]);

const iconMap: Record<string, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

const statusStyles: Record<Project["status"], string> = {
  active: "text-emerald-600 bg-emerald-50",
  wip: "text-amber-600 bg-amber-50",
  archived: "text-muted-foreground bg-muted",
};

const statusLabels: Record<Project["status"], string> = {
  active: "Active",
  wip: "WIP",
  archived: "Archived",
};

const ProjectEntry = ({ project }: { project: Project }) => {
  const IconComponent = iconMap[project.icon ?? ""] ?? Folder;
  const isOutline = outlineIcons.has(project.icon ?? "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-4 py-3 -mx-4 rounded-md transition-colors duration-75 hover:bg-secondary border-b last:border-b-0"
    >
      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shrink-0">
        <IconComponent
          className="h-4.5 w-4.5 text-accent-foreground"
          {...(isOutline ? { strokeWidth: 2.5 } : { fill: "currentColor", strokeWidth: 0 })}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold truncate">
            {project.name}
          </span>
          <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
        </div>
        <p className="font-body text-xs text-muted-foreground truncate mt-0.5">
          {project.description}
        </p>
      </div>

      <div className="hidden sm:flex items-center gap-3 shrink-0 font-mono text-xs text-muted-foreground">
        <span>{project.category}</span>
        <span
          className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
        <span className="w-12 text-right">v{project.version}</span>
      </div>
    </a>
  );
};

export default ProjectEntry;
