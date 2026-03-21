export interface Lang {
    key: string;
    uid: string;
    title: string;
    emoji: string;
}

export const LangMap: Lang[] = [
    { key: 'en', uid: 'en-us', title: 'English (United States)', emoji: '🇺🇸' },
    { key: 'br', uid: 'pt-br', title: 'Português (Brasileiro)', emoji: '🇧🇷' },
];
