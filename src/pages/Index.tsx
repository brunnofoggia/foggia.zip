import { ArchiveFooter } from '@/components/ArchiveFooter';
import { ArchiveHeader } from '@/components/ArchiveHeader';
import { LinkEntry } from '@/components/LinkEntry';
import { links } from '@/data/index/links';
import { texts } from '@/data/index/texts';
import { getText } from '@/utils/lang';

export const Index = () => {
    const text = getText(texts);
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-16 md:py-24">
                <ArchiveHeader />

                <section>
                    <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Links</h2>

                    <div className="border rounded-md px-4">
                        {links.map((project) => (
                            <LinkEntry key={project.name} link={project} />
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
