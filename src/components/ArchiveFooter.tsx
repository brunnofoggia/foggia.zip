import { texts } from '@/data/footer/texts';
import { getText } from '@/utils/lang';

const currentYear = new Date().getFullYear();
const startYear = 2005;
const yearsActive = currentYear - startYear;

export const ArchiveFooter = () => {
    const titleTexts = getText(texts);
    return (
        <footer className="w-full max-w-2xl mx-auto px-6 pb-12">
            <div className="border-t pt-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>— {titleTexts.end} —</span>
                <span>
                    foggia.zip © {startYear}
                    {yearsActive > 0 ? ` - ${currentYear}` : ''}
                </span>
            </div>
        </footer>
    );
};
