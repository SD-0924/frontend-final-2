import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '../node_modules/react-router-dom/dist/index'
import { router } from './Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
