import React from 'react';
import Header from './components/header';
import Cards from './components/cards';
import './App.css';
import data from './data';


function App() {

  const cards= data.map(data=>{
     return <Cards
      key={data.id}
      data={data}/>

  })
     
  return (
    <div className="App">
       <Header/>
       <div className='cards'>
        {cards}
       </div>
    </div>
  );
}

export default App;
