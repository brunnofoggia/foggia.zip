import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function defineBaseUrl(mode: string = null): string {
    if (mode === null) {
        mode = import.meta.env.MODE;
    }

    return mode === 'production' ? '/foggia.zip/' : '/';
}

export function defineUrl(path: string, baseUrl: string = null, skipLang: boolean = false): string {
    if (!baseUrl) baseUrl = defineBaseUrl();

    baseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    path = path.startsWith('/') ? path.slice(1) : path;
    path = path.endsWith('/') ? path : `${path}/`;

    const url = `${baseUrl}${path}`;
    return url;
}
