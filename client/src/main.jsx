import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'
import Homepage from './components/Homepage.jsx'
import Userprofile from './components/Userprofile.jsx'
import CharacterSheet from  './components/CharacterSheet.jsx'
import CharacterCreator from './components/CharacterCreator.jsx'


const routes = [{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Homepage />
    },
    {
      path: 'userprofile',
      element: <Userprofile />
    },
    {
      path: 'charactercreator',
      element: <CharacterCreator />
    },
    {
      path: 'charactersheet',
      element: <CharacterSheet />
    }
  ]
}]

const router =createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    
  </React.StrictMode>,
)
