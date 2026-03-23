import { Folder, Zap } from 'lucide-react';

import { defineBaseUrl } from '@/utils/utils';
import { Flag } from './LangFlag';
import { Lang, LangMap } from '@/data/langs';
import { getLang, setLang } from '@/utils/lang';

function clickSetLang(event: React.MouseEvent<HTMLAnchorElement>, lang: string) {
    event.preventDefault();
    setLang(lang);
    window.location.reload();
}

function renderFlags(langs: Lang[], selectedLang: string) {
    const map = langs.map((lang: Lang, index: number) => {
        const tag = (
            <span key={lang.uid}>
                {/* <a href={selectedLang !== lang.key ? `?lang=${lang.key}` : undefined}> */}
                <a href="#" onClick={(event) => clickSetLang(event, lang.key)}>
                    <Flag lang={lang.key} size={1.3} />
                </a>
            </span>
        );
        return tag;
    });
    return map;
}

export const ArchiveHeader = () => {
    return (
        <header className="border-b pb-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
                <Folder className="h-5 w-5 text-accent" />
                <a className="font-mono text-sm text-muted-foreground" href={defineBaseUrl()}>
                    /
                </a>
                <div className="ml-auto flex flex-row items-center gap-1">{renderFlags(LangMap, getLang())}</div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">
                <a href={defineBaseUrl()}>foggia.zip</a>
            </h1>
            <p className="flex items-center gap-2 font-body text-sm text-muted-foreground italic">
                <Zap className="h-4 w-4 text-accent shrink-0" fill="currentColor" strokeWidth={0} />I am not regular. I will not give you
                regular.
            </p>
        </header>
    );
};
