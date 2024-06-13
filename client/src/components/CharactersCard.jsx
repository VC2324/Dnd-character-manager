import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function CharacterCards(){

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("/api/characters")
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error("Failed to fetch characters");
          }
        })
        .then(data => {
          setCharacters(data.characters)
        })
        .catch(error => {
          setError(error.message)
        });
    }, []);
  

    return(  
    
    <div>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
            {characters.length === 0 ? (
              <div>
                <p>No characters in roster.</p>
                <Link to="/charactercreator">
                  <button>Create a Character</button>
                </Link>
              </div>
            ) : (
                <div className="cards-grid">
                  {characters.map(character => (
                    <div className="character-card" key={character.id}>
                      <h3>{character.name}</h3>
                      {/* Add more character details as needed */}
                      <p>Level: {character.level}</p>
                      <p>Class: {character.klass}</p>
                      <p>Exp: {character.xp}</p>

                    </div>
                  ))}
                </div>
              )}
              <Link to="/create-character">
                <button className="create-character-button">Create a Character</button>
              </Link>
            </div>
              
              
            )}
          </div>
      
    )
  }
export default CharacterCards