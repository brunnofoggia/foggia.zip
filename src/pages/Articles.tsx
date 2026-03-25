import { ArchiveHeader } from '@/components/ArchiveHeader';
import { ArchiveFooter } from '@/components/ArchiveFooter';
import { Link, LinkEntry } from '@/components/LinkEntry';

import { getLinkText, getText } from '@/utils/lang';
import { isPublished } from '@/utils/article';

import { links } from '@/data/articles/links';
import { links as RefLinks } from '@/data/articles/references/links';
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
                        {links
                            .filter((link) => isPublished(link.published))
                            .map((link) => (
                                <LinkEntry
                                    key={link.name}
                                    link={link}
                                    showCategory={false}
                                    showVersion={false}
                                    wipDescription={text.wipDescription}
                                    notReadyDescription={text.notReadyDescription}
                                />
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

                <section>
                    <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 mt-10">
                        {currentLinkText.referenceTitle}
                    </h2>

                    <div className="border rounded-md px-4">
                        {RefLinks.filter((link) => isPublished(link.published)).map((link) => (
                            <LinkEntry
                                key={link.name}
                                link={link}
                                showCategory={false}
                                showVersion={false}
                                wipDescription={text.wipDescription}
                                notReadyDescription={text.notReadyDescription}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mt-4">
                        <span>
                            {text.items}: {RefLinks.length}
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
