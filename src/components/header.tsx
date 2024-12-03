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
        <header className="sticky top-0 z-50 max-w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
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