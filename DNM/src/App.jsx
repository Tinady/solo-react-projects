import Navbar from './components/navbar/Navbar'
import Fav from './components/fav/fav'
import Home from './components/home/Home'
import ReadMore from './components/readmore/readmore'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import { Route, Routes } from 'react-router-dom'
import data from './data'
import './App.css'
import { useState } from 'react'

function App() {
    const [docs, setDocs]=useState(data)

    function toggle(id){
            setDocs(prevState=>{
              return prevState.map((docs)=>{
                return docs.id===id?{...docs, fav:!docs.fav}:docs;
              })
            })
    }

  const homeel= docs.map(items=>
     {return <Home key={items.id}
      items={items} 
      handleclick={()=>toggle(items.id)}/>})

  const favel= docs.map(items=>
        {return <Fav key={items.id}
         items={items} 
         handleclick={()=>toggle(items.id)}/>})
   
     const rm=<ReadMore items={docs}/>
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<div>
        <div className='cards-container'>{homeel}</div>
        <h2>Favourites</h2>
        <hr/>
        <div className='cards-container'>{favel}</div>
        </div>}/> 
      <Route path='/:id' element={rm}/>
      <Route path='/articles' element={<>Articles</>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='signup'  element={<Signup/>}/>
      
     </Routes>
    </>
  )
}

export default App
