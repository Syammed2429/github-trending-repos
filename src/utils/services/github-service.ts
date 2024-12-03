import { format, subDays } from 'date-fns';
import axios from 'axios';
import { GITHUB_API_URL } from '@/config/constants';

// Create axios instance with default config
export const githubApi = axios.create({
    baseURL: GITHUB_API_URL,
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

// Add response interceptor for rate limit handling
githubApi.interceptors.response.use(
    (response) => {
        const remaining = parseInt(response.headers['x-ratelimit-remaining'] || '0', 10);
        const resetTime = parseInt(response.headers['x-ratelimit-reset'] || '0', 10) * 1000;

        // Store rate limit info in localStorage
        localStorage.setItem('github_rate_limit_remaining', remaining.toString());
        localStorage.setItem('github_rate_limit_reset', resetTime.toString());

        return response;
    },
    async (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 403) {
            const resetTime = parseInt(error.response.headers['x-ratelimit-reset'] || '0', 10) * 1000;
            const waitTime = resetTime - Date.now();

            if (waitTime > 0) {
                // Store rate limit info
                localStorage.setItem('github_rate_limit_remaining', '0');
                localStorage.setItem('github_rate_limit_reset', resetTime.toString());

                throw new Error(`GitHub API rate limit exceeded. Reset in ${Math.ceil(waitTime / 1000 / 60)} minutes.`);
            }
        }
        throw error;
    }
);

export function buildGitHubQuery(searchQuery: string = '', language: string = ''): string {
    const tenDaysAgo = format(subDays(new Date(), 10), 'yyyy-MM-dd');
    const parts = [`created:>${tenDaysAgo}`];

    if (searchQuery.trim()) {
        parts.push(searchQuery.trim());
    }

    if (language.trim()) {
        // Map cpp to 'c++' for the GitHub API
        const apiLanguage = language === 'cpp' ? 'c++' : language;
        parts.push(`language:${apiLanguage}`);
    }

    return parts.join(' ');
}

export function getRateLimitInfo() {
    const remaining = parseInt(localStorage.getItem('github_rate_limit_remaining') || '60', 10);
    const resetTime = parseInt(localStorage.getItem('github_rate_limit_reset') || '0', 10);

    return {
        remaining,
        resetTime,
        isLimited: remaining <= 0 && resetTime > Date.now(),
    };
}