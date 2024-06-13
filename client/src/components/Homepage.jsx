import Login from "./Login"
import Signup from "./Signup"
import Userprofile from "./Userprofile"
import { useOutletContext } from "react-router-dom"

function Homepage(){

const {currentUser, setCurrentUser} = useOutletContext()
if (!currentUser) { 
    return (

        <div className="home">

          {/* <Signup setCurrentUser={setCurrentUser}/> */}
          <Login setCurrentUser={setCurrentUser}/>

        </div>

    )

    } else {

return(
    <div>
        <Userprofile/>
    </div>
)
pass

}
}
export default Homepage