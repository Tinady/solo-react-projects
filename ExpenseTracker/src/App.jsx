import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import History from './Components/History'

const App = () => {
  return (
    <div className='bg-gray-200 flex flex-col gap-10 items-center justify-center h-screen '>
      <Header/>
      <Balance/>
      <History/>
    </div>
  )
}

export default App
