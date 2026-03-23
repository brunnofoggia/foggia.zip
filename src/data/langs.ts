export interface Lang {
    key: string;
    uid: string;
    title: string;
    emoji: string;
    countryCode?: string;
}

export const LangMap: Lang[] = [
    { key: 'en', uid: 'en-us', title: 'English (United States)', countryCode: 'US', emoji: '🇺🇸' },
    { key: 'br', uid: 'pt-br', title: 'Português (Brasileiro)', countryCode: 'BR', emoji: '🇧🇷' },
];
