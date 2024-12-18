import { RateLimitAlert } from '@/components/alert/rate-limit-alert';
import { StarBackground } from '@/components/background/background-stars';
import { Header } from '@/components/header';
import { RepositoryGrid } from '@/components/repos/repos-grid';
import { useGitHubSearch } from '@/hooks/use-github-hook';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const GithubContainer = () => {
    const { ref, inView } = useInView();
    // states
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [language, setLanguage] = useState<string>('');

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
        useGitHubSearch({
            query: searchQuery,
            language,
            page: 1,
        });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    const repositories = data?.pages.flatMap((page) => page.items) ?? [];
    const errorMessage =
        error instanceof Error ? error.message : 'An error occurred while fetching repositories.';

    return (
        <div className="min-h-screen w-full bg-background">
            <StarBackground />
            <Header
                onSearchChange={setSearchQuery}
                searchQuery={searchQuery}
                language={language}
                onLanguageChange={setLanguage}
            />
            <main className="mx-auto mt-[7rem] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <RepositoryGrid
                    repositories={repositories}
                    isLoading={isLoading}
                    isError={isError}
                    errorMessage={errorMessage}
                />
                <div ref={ref} className="h-20" />
                {isFetchingNextPage && (
                    <div className="mx-auto mt-8 px-4 py-8 sm:px-6 lg:px-8">
                        <RepositoryGrid repositories={[]} isLoading={true} isError={false} />
                    </div>
                )}
            </main>
            <RateLimitAlert />
        </div>
    );
};

export default GithubContainer;
