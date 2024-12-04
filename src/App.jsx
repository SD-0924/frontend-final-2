import { Outlet } from 'react-router-dom'
import './App.css'
import { Layout } from './layout'
import { useQueryClient, QueryClient,QueryClientProvider } from '@tanstack/react-query'

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet/>
      </Layout>
      </QueryClientProvider>
    </>
  )
}


