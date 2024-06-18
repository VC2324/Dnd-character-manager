import { Outlet, useOutletContext } from "react-router-dom"
import CharacterCards from "./CharactersCard"
import Navbar from "./Navbar"

function Userprofile(){
    const {currentUser, setCurrentUser} = useOutletContext()

    // function handleLogout(){
    //     setCurrentUser(null)
    //     fetch('/api/logout', {
    //         method: 'DELETE'
    //     })
    // }

    return(
            <div className="flex-wrap">
            <Navbar/>
            <h1 className="font-dragon text-2xl"> Welcome {currentUser.username} </h1>
            <Outlet/>
            {/* <button  className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2" onClick={handleLogout}>Log out</button> */}
            <CharacterCards/>
            </div>
    )


}

export default Userprofile