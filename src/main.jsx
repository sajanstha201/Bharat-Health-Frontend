import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Layout from "./Layout.jsx"
import NonRegisteredMainPage from "./components/User/NonRegistered/NonRegisteredMainPage.jsx"
import App from './App.jsx'
import './index.css'
import {DoctorMainPage,PharmacyMainPage,PatientMainPage,TestLabMainPage} from './components/User/Registered'
import { Setting as PatientSetting,MedicalReport as PatientMedicalReport,Appointment as PatientAppointment} from "./components/User/Registered/Patient/index.jsx"
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
          path:"patient",
          element:<PatientMainPage/>,
          children:[
            {path: 'appointments',element: <PatientAppointment />},
            {path:'settings',element:<PatientSetting/>},
            {path:'medical-report',element:<PatientMedicalReport/>}
          ]
        },



        {
          path:"doctor",
          element:<DoctorMainPage/>
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
