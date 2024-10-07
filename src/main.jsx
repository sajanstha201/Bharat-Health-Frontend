import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Layout from "./Layout.jsx"
import NonRegisteredMainPage from "./components/User/NonRegistered/NonRegisteredMainPage.jsx"
import App from './App.jsx'
import './index.css'
import {DoctorRouter,PharmacyMainPage,TestLabMainPage,PatientRouter} from './components/User/Registered'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"",
          element: <NonRegisteredMainPage />
        },

        {
          path:"patient/*",
          element:<PatientRouter/>
        },
        {
          path:"doctor/*",
          element:<DoctorRouter/>
        },
        {
          path:"pharmacy",
          element:<PharmacyMainPage/>
        },
        {
          path:"testlab",
          element:<TestLabMainPage/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
