import { ArchiveHeader } from '@/components/ArchiveHeader';

import { links as IndexLinks } from '@/data/index/links';
import { links } from '@/data/articles/links';
import { defineUrl } from '@/utils/utils';
import { getLinkText, getText } from '@/utils/lang';
import { ArchiveFooter } from '@/components/ArchiveFooter';
import { NotFound } from './NotFound';
import { texts } from '@/data/article/texts';

export const Article = ({ slug }: { slug: string }) => {
    const parentLink = IndexLinks.find((link) => link.name === 'articles');
    const parentLinkText = getLinkText(parentLink);

    const currentLink = links.find((link) => link.slug === slug);
    const currentLinkText = getLinkText(currentLink);

    const _texts = getText(texts);
    const published = currentLink.published;
    const publishedDate = published ? new Date(published) : null;
    const now = new Date();
    if (!published || (publishedDate && publishedDate > now)) {
        return NotFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-16 md:py-24">
                <ArchiveHeader totalProjects={links.length} />

                <section>
                    <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
                        <span>
                            <a href={defineUrl('/articles')}>{parentLinkText.title}</a> / {currentLinkText.title}
                        </span>
                    </h2>

                    <div className="border rounded-md px-4">{currentLinkText.content}</div>

                    <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mt-4">
                        <span>
                            {_texts.published}: {currentLink.published}
                        </span>
                        <span className="text-border">│</span>
                        <span>
                            {_texts.status}: {_texts.statusValue}
                        </span>
                        <span className="text-border">│</span>
                        <span>
                            {_texts.type}: {_texts.typeValue}
                        </span>
                    </div>
                </section>
            </main>

            <ArchiveFooter />
        </div>
    );
};
