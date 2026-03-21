import { getLinkText, getText } from '@/utils/lang';
import { Instagram, Linkedin, Github, Folder, ArrowUpRight, FileText, type LucideIcon } from 'lucide-react';

export interface Text {
    lang: string;
    [key: string]: string;
}

export type TextList = Text[];

export interface Link {
    name: string;
    status: 'active' | 'wip' | 'archived' | 'notready';
    size: string;

    slug?: string;
    url?: string;
    icon?: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element?: React.FC<any>;
    external?: boolean;

    published?: string;
    texts?: TextList;
    route?: string;
}

const outlineIcons = new Set(['instagram']);

const iconMap: Record<string, LucideIcon> = {
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
    document: FileText,
};

const statusLabelStyles: Record<Link['status'], string> = {
    active: 'text-emerald-600 bg-emerald-50',
    wip: 'text-amber-600 bg-amber-50',
    archived: 'text-muted-foreground bg-muted',
    notready: 'text-red-600 bg-red-50',
};

const statusBulletStyles: Record<Link['status'], string> = {
    active: 'bg-emerald-600',
    wip: 'bg-amber-500',
    archived: 'bg-muted-foreground',
    notready: 'bg-red-500',
};

const statusLabelsTexts = [
    {
        lang: 'en',
        active: 'Active',
        wip: 'WIP',
        notready: 'Soon',
        archived: 'Archived',
    },
    {
        lang: 'br',
        active: 'Ativo',
        wip: 'Em Progresso',
        notready: 'Em Breve',
        archived: 'Arquivado',
    },
];

export const LinkEntry = ({
    link,
    showCategory = true,
    showVersion = true,
}: {
    link: Link;
    showCategory?: boolean;
    showVersion?: boolean;
}) => {
    const IconComponent = iconMap[link.icon ?? ''] ?? Folder;
    const isOutline = outlineIcons.has(link.icon ?? '');
    const linkText: Text = getLinkText(link);
    const statusLabelText = getText(statusLabelsTexts);

    return (
        <a
            href={link.status === 'notready' ? undefined : link.url}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 px-4 py-3 -mx-4 rounded-md transition-colors duration-75 hover:bg-secondary border-b last:border-b-0"
        >
            <div
                className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${link.status === 'notready' ? 'bg-black/30' : 'bg-accent'}`}
            >
                <IconComponent
                    className="h-4.5 w-4.5 text-accent-foreground"
                    {...(isOutline ? { strokeWidth: 2.5 } : { fill: 'currentColor', strokeWidth: 0 })}
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span
                        className={`font-display text-sm font-bold truncate ${link.status === 'notready' ? 'opacity-50 ' : ''}`}
                        style={{ textDecoration: link.status === 'notready' ? 'line-through' : 'none' }}
                    >
                        {linkText.title}
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
                </div>
                <p className="font-body text-xs text-muted-foreground truncate mt-0.5">{linkText.description}</p>
            </div>

            <div className="hidden sm:flex items-center gap-3 shrink-0 font-mono text-xs text-muted-foreground">
                {showCategory && <span>{linkText.category}</span>}

                <span
                    className={`inline-block w-2 h-2 rounded-full mr-2 ${statusBulletStyles[link.status]}`}
                    aria-label={statusLabelText[link.status]}
                    title={statusLabelText[link.status]}
                />
                {/* <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${statusLabelStyles[link.status]}`}
                    title={statusLabelText[link.status]}
                ></span> */}

                {showVersion && <span className="w-12 text-center">{link.size}</span>}
            </div>
        </a>
    );
};
