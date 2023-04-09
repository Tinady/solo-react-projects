import React from 'react';

import Header from './components/header';
import './App.css';
import { header } from 'express/lib/request';

function App() {
  return (
    <div className="App">
       <Header/>
    </div>
  );
}

export default App;
