import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { SearchBar } from "./header/search-bar";
import { LanguageSelect } from "./header/languages-select";
import logo from "@/assets/logo.webp";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  language: string;
  onLanguageChange: (value: string) => void;
}

export const Header = ({
  searchQuery,
  onSearchChange,
  language,
  onLanguageChange,
}: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" width={40} height={40} />
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                Trending Repos
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
            <LanguageSelect value={language} onChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  );
};
