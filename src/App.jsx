import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const baseUrl=useSelector(state=>state.baseUrl).backend
  return (
    <>
    <p> Bharat Helath</p>
    {baseUrl}
    </>
  )
}

export default App
