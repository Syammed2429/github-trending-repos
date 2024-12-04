import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { languages } from '@/utils/data/json-data';

interface LanguageBadgeProps {
    language: string;
}

const getLanguageColors = (language: string) => {
    const colors: Record<string, { bg: string; text: string }> = languages;
    return colors[language] || { bg: 'bg-primary/20', text: 'text-primary' };
};

export function LanguageBadge({ language }: LanguageBadgeProps) {
    const colors = getLanguageColors(language);

    return (
        <Badge
            variant="secondary"
            className={cn('inline-flex font-medium', colors.bg, colors.text)}
        >
            {language}
        </Badge>
    );
}
