import { LangMap } from '@/data/langs';

interface FlagProps {
    lang: string;
    size?: number;
}

export const Flag: React.FC<FlagProps> = ({ lang, size = 1 }) => {
    const _lang = LangMap.find((l) => l.key === lang);
    const title = _lang?.title || 'Unknown Language';
    const emoji = _lang?.emoji || '🏳️';
    return (
        <span style={{ fontSize: `${size}em` }} title={title}>
            {emoji}
        </span>
    );
};
