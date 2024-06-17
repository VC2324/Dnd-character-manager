import { useOutletContext } from "react-router-dom"
import CharacterCards from "./CharactersCard"

function Userprofile(){
    const {currentUser, setCurrentUser} = useOutletContext()

    function handleLogout(){
        setCurrentUser(null)
        fetch('/api/logout', {
            method: 'DELETE'
        })
    }

    return(
            <div id="userprofile">
            <h1> Welcome {currentUser.username} </h1>
            <button  class ="py-3 border-spacing-10"  onClick={handleLogout}>Log out</button>
            <CharacterCards class="p-8 ..."/>
            </div>
    )


}

export default Userprofile