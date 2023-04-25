import { useState } from 'react'
import Header from './components/Header'
import Intro from './components/intro'
import './App.css'

function App() {

  const [darkmode, setDarkMode]=useState(true)
    function toggle()
    {
       setDarkMode(prevState=>!prevState)
    }

  return (
    <div className="App">
      <Header darkMode={darkmode} handleClick={toggle}/>
      <Intro darkMode={darkmode}/>
    </div>
  )
}

export default App
