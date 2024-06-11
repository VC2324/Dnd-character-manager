import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"

function App() {

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Navbar/>
      <Outlet />
    </div>
  )

}

export default App
