import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

import Navbar from "./Navbar"

function App() {

  const [currentUser, setCurrentUser]= useState(null)


  useEffect( () => {
    fetch('/api/check_session')
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(loggedUser => setCurrentUser(loggedUser))
      }
    }
    )
  }, [])


  
  return (
    <div className='App'>
      <h1 class="font-dragon">Hello World</h1>
      {/* <Navbar/> */}
      <Outlet context={{currentUser:currentUser, setCurrentUser:setCurrentUser,}} />

    </div>
  )

}

export default App
