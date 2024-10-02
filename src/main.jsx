import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Layout from "./Layout.jsx"
import NonRegisteredMainPage from "./components/User/NonRegistered/NonRegisteredMainPage.jsx"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"",
          element: <NonRegisteredMainPage />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
