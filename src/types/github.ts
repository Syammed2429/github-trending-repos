export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
}

export interface GitHubSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}

export interface SearchParams {
    query?: string;
    language?: string;
    page: number;
}