
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/articles' element={<>Articles</>}/>
      <Route path='/login' element={<>Login</>}/>
      
     </Routes>
    </>
  )
}

export default App
