import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { SearchBar } from './header/search-bar';
import { LanguageSelect } from './header/languages-select';



interface HeaderProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    language: string;
    onLanguageChange: (value: string) => void;
}

export const Header = ({ searchQuery, onSearchChange, language, onLanguageChange }: HeaderProps) => {
    const { theme, setTheme } = useTheme();


    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-4 px-5 mx-auto">
                <div className="flex items-center justify-between ">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Trending Repos
                    </h1>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            {theme === 'light' ? (
                                <Moon className="h-5 w-5" />
                            ) : (
                                <Sun className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>
                <div className="mt-4 flex gap-4">
                    <SearchBar value={searchQuery} onChange={onSearchChange} />
                    <LanguageSelect value={language} onChange={onLanguageChange} />
                </div>
            </div>
        </header>
    );
}