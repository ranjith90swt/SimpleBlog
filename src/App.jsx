import React from 'react'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="bg-white flex flex-col">
        <NavBar/>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
