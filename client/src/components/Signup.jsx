import { useState } from "react"

function Signup(){


const[username, setUsername]= useState ('')
const[password, setPassword]= useState ('')
const [currentUser, setCurrentUser] = useState(null)
function handleSubmit(e){
    e.preventDefault();

    fetch("/api/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Signup failed')
      }
    })
    .then(newUser => {
      setCurrentUser(newUser)
    })
    .catch(error => {
      console.error('Error signing up:', error.message);
      alert("Signup Failed")
    })
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;