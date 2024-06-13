import { useOutletContext } from "react-router-dom"

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
                
            <button id="logout-btn" onClick={handleLogout}>Log out</button></div>
    )


}

export default Userprofile