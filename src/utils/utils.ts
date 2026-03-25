import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function defineBaseUrl(mode: string = null): string {
    if (mode === null) {
        mode = import.meta.env.MODE;
    }

    // For github domain with subfolder
    // return mode === 'production' ? '/foggia.zip/' : '/';
    // For custom domain or localhost
    return mode === 'production' ? '/' : '/';
}

export function defineUrl(path: string, baseUrl: string = null, skipLang: boolean = false): string {
    if (!baseUrl) baseUrl = defineBaseUrl();

    baseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    path = path.startsWith('/') ? path.slice(1) : path;
    path = path.endsWith('/') ? path.replace(/\/$/, '') : path;

    const url = `${baseUrl}${path}`;
    return url;
}

export function definePath(path: string, baseUrl: string = null, skipLang: boolean = false): string {
    const url = defineUrl(path, baseUrl, skipLang);
    return url + '/';
}
