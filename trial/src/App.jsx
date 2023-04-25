import { useState } from 'react'
import Header from './components/Header'
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
    </div>
  )
}

export default App
