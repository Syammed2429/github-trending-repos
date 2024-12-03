import { useInfiniteQuery } from '@tanstack/react-query';
import type { GitHubSearchResponse, SearchParams } from '../types/github';
import { buildGitHubQuery, getRateLimitInfo, githubApi } from '@/utils/services/github-service';
import { CACHE_RETRY_COUNT, CACHE_STALE_TIME, CACHE_TIME, ITEMS_PER_PAGE, RATE_LIMIT_WAIT_TIME } from '@/config/constants';

export function useGitHubSearch({ query = '', language = '' }: SearchParams) {
    const searchQuery = buildGitHubQuery(query, language);

    return useInfiniteQuery({
        queryKey: ['repos', query, language],
        queryFn: async ({ pageParam = 1, signal }) => {
            const rateLimitInfo = getRateLimitInfo();

            if (rateLimitInfo.isLimited) {
                const waitMinutes = Math.ceil((rateLimitInfo.resetTime - Date.now()) / 1000 / 60);
                await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_WAIT_TIME));
                throw new Error(`GitHub API rate limit exceeded. Reset in ${waitMinutes} minutes.`);
            }

            try {
                const { data } = await githubApi.get<GitHubSearchResponse>('/search/repositories', {
                    params: {
                        q: searchQuery,
                        sort: 'stars',
                        order: 'desc',
                        per_page: ITEMS_PER_PAGE,
                        page: pageParam,
                    },
                    signal,
                });
                return data;
            } catch (error) {
                if (error instanceof Error) {
                    throw error;
                }
                throw new Error('Failed to fetch repositories. Please try again later.');
            }
        },
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return lastPage.items.length === ITEMS_PER_PAGE ? nextPage : undefined;
        },
        initialPageParam: 1,
        staleTime: CACHE_STALE_TIME,
        gcTime: CACHE_TIME,
        retry: CACHE_RETRY_COUNT,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retryDelay: RATE_LIMIT_WAIT_TIME,
    });
}