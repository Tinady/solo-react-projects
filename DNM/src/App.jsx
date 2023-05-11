
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import data from './data'
import './App.css'

function App() {

  const homeel= data.map(items=>
     {return <Home key={items.id} items={items}/>})
   
     
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<div className='cards-container'>{homeel}</div>}/>
      <Route path='/articles' element={<>Articles</>}/>
      <Route path='/login' element={<>Login</>}/>
      
     </Routes>
    </>
  )
}

export default App
