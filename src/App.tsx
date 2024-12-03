import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CACHE_RETRY_COUNT, CACHE_STALE_TIME } from './config/constants';
import GithubContainer from './container/github-container';
import { ThemeProvider } from './components/theme-provider';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_STALE_TIME,
      retry: CACHE_RETRY_COUNT,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="github-explorer-theme">
        <QueryClientProvider client={queryClient}>
          <GithubContainer />
        </QueryClientProvider>
      </ThemeProvider>


    </>
  )
}

export default App
