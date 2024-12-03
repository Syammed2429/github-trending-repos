import { Repository } from '@/types/github';
import { CardSkeleton } from '../skeletons/card-skeleton';
import { RepositoryCard } from './repos-card';

interface RepositoryGridProps {
    repositories: Repository[];
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
}

export const RepositoryGrid = ({ repositories, isLoading, isError, errorMessage }: RepositoryGridProps) => {
    if (isError) {
        return (
            <div className="text-center text-red-600 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                {errorMessage || 'Error loading repositories. Please try again later.'}
            </div>
        );
    }

    if (!isLoading && repositories.length === 0) {
        return (
            <div className="text-center text-gray-600 dark:text-gray-400 p-4">
                No repositories found matching your criteria.
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
                : repositories.map((repo) => (
                    <RepositoryCard key={repo.id} repository={repo} />
                ))}
        </div>
    );
}