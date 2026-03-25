import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { ArchiveHeader } from '@/components/ArchiveHeader';
import { ArchiveFooter } from '@/components/ArchiveFooter';

import { fallbackLang, getLang, getLinkText, getText } from '@/utils/lang';
import { defineUrl, defineBaseUrl } from '@/utils/utils';
import { isPublished } from '@/utils/article';

import { links as IndexLinks } from '@/data/index/links';
import { links } from '@/data/articles/links';
import { links as refLinks } from '@/data/articles/references/links';
import { texts } from '@/data/article/texts';

import { NotFound } from './NotFound';

async function fetchMarkdown(slug: string, lang: string): Promise<string | null> {
    const base = defineBaseUrl();
    const additionalFolder = `${base}a-content/article/${slug}`;

    async function fetchMarkdown(_lang: string): Promise<string | null> {
        const url = `${base}content/article/${slug}/${_lang}.md`;
        const res = await fetch(url);
        if (!res.ok) return null;
        let text = await res.text();

        // to skip 404.html response
        if (text.includes('<html')) return null;

        text = text.replace(/\.\/img/g, `${additionalFolder}/img`);
        return text;
    }

    return (await fetchMarkdown(lang)) ?? (lang !== fallbackLang ? await fetchMarkdown(fallbackLang) : null);
}

export const Article = ({ slug }: { slug: string }) => {
    const lang = getLang();

    const parentLink = IndexLinks.find((link) => link.name === 'articles');
    const parentLinkText = getLinkText(parentLink);

    const currentLink = [links, refLinks].flat().find((link) => link.slug === slug);
    const currentLinkText = getLinkText(currentLink);

    const _texts = getText(texts);

    const [rawContent, setRawContent] = useState<string | null | undefined>(undefined);

    useEffect(() => {
        if (!currentLink || !isPublished(currentLink.published)) {
            setRawContent(null);
            return;
        }
        fetchMarkdown(slug, lang).then(setRawContent);
    }, [slug, lang, currentLink]);

    if (rawContent === undefined) return null;
    if (rawContent === null) return NotFound();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-16 md:py-24">
                <ArchiveHeader />

                <section>
                    <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
                        <span>
                            <Link to={defineUrl('/articles')}>{parentLinkText.title}</Link> / {currentLinkText.title}
                        </span>
                    </h2>

                    <div className="border rounded-md px-4 pb-4">
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[]}
                                components={{
                                    h1: ({ node, ...props }) => <h1 {...props} style={{ marginTop: '0.8em', fontSize: '1.8em' }} />,
                                    h2: ({ node, ...props }) => <h2 {...props} style={{ marginTop: '0.5em', fontSize: '1.4em' }} />,
                                    h3: ({ node, ...props }) => <h3 {...props} style={{ marginTop: '0.5em', fontSize: '1.2em' }} />,
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote {...props} style={{ marginTop: '0.5em', fontSize: '0.8rem' }} />
                                    ),
                                    a: ({ node, href, ...props }) => {
                                        const target = href?.startsWith('http') ? '_blank' : '';
                                        return <a href={href} target={target} {...props} />;
                                    },
                                }}
                            >
                                {rawContent}
                            </ReactMarkdown>
                        </div>
                    </div>

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
