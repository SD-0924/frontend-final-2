import { Outlet } from 'react-router-dom'
import './App.css'
import { Layout } from './layout'


export const App = () => {
  
  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  )
}


