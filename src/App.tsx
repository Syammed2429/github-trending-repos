import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { CACHE_RETRY_COUNT, CACHE_STALE_TIME } from './config/constants';
import GithubContainer from './container/github-container';


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
      <QueryClientProvider client={queryClient}>
        <GithubContainer />
      </QueryClientProvider>


    </>
  )
}

export default App
