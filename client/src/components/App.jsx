import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import backgroundImage from "/Assets/Logincastle.png"



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
    <div
    className='App relative bg-cover bg-center bg-no-repeat min-h-screen'
    style={{ backgroundImage: `url(${backgroundImage})` }}>

      {/* <Navbar/> */}
      <Outlet context={{currentUser:currentUser, setCurrentUser:setCurrentUser,}} />

    </div>
  )

}

export default App
