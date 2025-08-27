import { useState } from 'react'
import './App.css'
import Home from './pages/Home/home.jsx'
import Navbar from "./components/nav-bar/nav-bar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Home/>
    </>
  )
}

export default App
