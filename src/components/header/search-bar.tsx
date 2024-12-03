import { Search } from 'lucide-react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(value);

    const debouncedOnChange = useDebouncedCallback(
        (value: string) => {
            onChange(value);
        },
        300
    );

    const handleChange = (newValue: string) => {
        setInputValue(newValue);
        debouncedOnChange(newValue);
    };

    return (
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search repositories..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    );
}