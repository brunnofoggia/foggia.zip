import { Link, Text } from '@/components/LinkEntry';
import { LangMap } from '@/data/langs';

let lang: string = '';

function userLang(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _navigator: any = navigator || (window as any).navigator;
    const _lang = _navigator?.language || _navigator?.userLanguage;

    if (_lang.startsWith('pt')) {
        return 'br';
    }
    return 'en';
}

export function getLang(): string {
    if (lang) return lang;
    const _default = userLang();
    const storedLang = localStorage.getItem('lang');

    lang = _default;
    if (storedLang) lang = storedLang;

    const langKeyList = LangMap.map((l) => l.key);
    if (!langKeyList.includes(lang)) {
        lang = _default; // fallback to default language if unsupported
    }

    return lang;
}

export function setLang(newLang: string) {
    const langArr = LangMap.map((l) => l.key);
    if (!langArr.includes(newLang)) {
        console.warn(`Unsupported language: ${newLang}`);
        return;
    }

    lang = newLang;

    // Store the selected language in localStorage
    try {
        localStorage.setItem('lang', newLang);
    } catch (e) {
        console.warn('Could not save language to localStorage:', e);
    }
}

export function getText(texts, forceLang?: string) {
    const lang = forceLang || getLang();
    const text = texts.find((t) => t.lang === lang);
    if (!text) {
        return getText(texts, 'en'); // fallback to default language
    }
    return text;
}

export function getLinkText(link: Link, forceLang?: string): Text {
    return getText(link.texts, forceLang);
}
