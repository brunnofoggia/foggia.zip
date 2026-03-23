import { Lang, LangMap } from '@/data/langs';
import React from 'react';
import FlagIcon from 'react-flagkit'; // Certifique-se de instalar react-flagkit ou outro pacote de bandeiras SVG

interface FlagProps {
    lang: string;
    size?: number;
}

const getCountryCode = (lang: Lang) => {
    return lang?.countryCode?.toLocaleUpperCase() || '';
};

export const Flag: React.FC<FlagProps> = ({ lang, size = 1 }) => {
    const _lang: Lang | undefined = LangMap.find((l) => l.key === lang);
    const countryCode = getCountryCode(_lang);
    const title = _lang?.title || 'Unknown Language';

    return <FlagIcon country={countryCode} size={size * 24} title={title} />;
    // const emoji = _lang?.emoji || '🏳️';
    // return (
    //     <span style={{ fontSize: `${size}em` }} title={title}>
    //         {emoji}
    //     </span>
    // );
};
