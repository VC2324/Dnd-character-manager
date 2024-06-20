import { useState } from "react"
import { useOutletContext } from "react-router-dom"
function Login(){

    const[username, setUsername]= useState ('')
    const[password, setPassword]= useState ('')
    const [ isClicked, setIsClicked ] = useState(false)

    const{setCurrentUser}=useOutletContext()

    function handleLogout(){
        setCurrentUser(null)
        fetch('/api/logout', {
            method: 'DELETE'
        })
    }

    function handleLogin(e){
        e.preventDefault()
        fetch("/api/login", {
            method : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then (res =>{
            if(res.ok ){
                res.json()
                .then(newUser => setCurrentUser(newUser))
            }else{
                alert("Invalid Username or Password")
            }
        })

    }

    function handleSignup(e){
        e.preventDefault()
        fetch("/api/signup", {
            method : 'POST',
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({username, password})
        })
        .then (res =>{
            if(res.ok ){
                res.json()
                .then(newUser => setCurrentUser(newUser))
            }else{
                alert("Signup Failed")
            }
        })

    }
        if (!isClicked) {
            return(
            <div className="login-div flex flex-col items-center text-gray-200 p-10 rounded-lg shadow-lg max-w-md mx-auto bg-gradient-to-b from-brown-900 via-brown-800 to-brown-700">
            <h2 className="text-3xl font-bold mb-6">Log in</h2>
            <form onSubmit={handleLogin} className="w-full">
                <input
                    className="w-full p-3 mb-4 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                />
                <input
                    className="w-full p-3 mb-4 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                />
                <button
                    className="w-full bg-yellow-500 text-gray-900 py-3 rounded hover:bg-yellow-600 transition-colors"
                    type="submit"
                    name="submit"
                >
                    Log in
                </button>
            </form>
            <div className="mt-6 text-center">
                Don't have an account?&nbsp;
                <a
                    onClick={e => setIsClicked(!isClicked)}
                    href="#"
                    className="text-yellow-500 hover:underline"
                >
                    create one here
                </a>
                </div>
            </div>
            )
        } else {
            return(
                <div className="login-div p-10 bg-gradient-to-b  text-gray-200 from-brown-900 via-brown-800 to-brown-700 rounded-lg shadow-lg max-w-md mx-auto ">
    <h2 className="text-3xl  font-bold mb-6 text-center" >Sign up</h2>
    <form onSubmit={handleSignup} className="w-full">
        <input
            className="w-full p-3 mb-4 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200"
            onChange={e => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
        />
        <input
            className="w-full p-3 mb-4 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200"
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
        />
        <button
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded hover:bg-yellow-600 transition-colors"
            type="submit"
            name="submit"
        >Sign up
        </button>
    </form>
    <div className="mt-6 text-center">
        Log in&nbsp;
        <a
            onClick={e => setIsClicked(!isClicked)}
            href="#"
            className="text-yellow-500 hover:underline"
        >
            click here
        </a>
    </div>
</div>

        )
        }
}


export default Login