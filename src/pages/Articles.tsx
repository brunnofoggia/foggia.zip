import { ArchiveHeader } from '@/components/ArchiveHeader';
import { Link, LinkEntry } from '@/components/LinkEntry';
import { links } from '@/data/articles/links';
import { getLinkText, getText } from '@/utils/lang';
import { ArchiveFooter } from '@/components/ArchiveFooter';
import { texts } from '@/data/articles/texts';

export const Articles = ({ link: currentLink }: { link: Link }) => {
    const text = getText(texts);
    const currentLinkText = getLinkText(currentLink);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-16 md:py-24">
                <ArchiveHeader />

                <section>
                    <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">{currentLinkText.title}</h2>

                    <div className="border rounded-md px-4">
                        {links.map((link) => (
                            <LinkEntry key={link.name} link={link} showCategory={false} showVersion={false} />
                        ))}
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mt-4">
                        <span>
                            {text.items}: {links.length}
                        </span>
                        <span className="text-border">│</span>
                        <span>
                            {text.status}: {text.statusValue}
                        </span>
                        <span className="text-border">│</span>
                        <span>
                            {text.type}: {text.typeValue}
                        </span>
                    </div>
                </section>
            </main>

            <ArchiveFooter />
        </div>
    );
};
