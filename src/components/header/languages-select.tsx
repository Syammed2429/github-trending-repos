import { dropDownLanguages } from '@/utils/data/json-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface LanguageSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export const LanguageSelect = ({ value, onChange }: LanguageSelectProps) => {
    const selectValue = value || 'all';

    const handleValueChange = (newValue: string) => {
        onChange(newValue === 'all' ? '' : newValue);
    };
    return (
        <Select value={selectValue} onValueChange={handleValueChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                {dropDownLanguages.map((language) => (
                    <SelectItem key={language.value} value={language.value}>
                        {language.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
