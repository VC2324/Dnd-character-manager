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
    // console.log({data.characters})  
  
console.log(characters)
    return(  
      
      <div >
  {error ? (
    <div>Error: {error}</div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 " >
      {characters.length === 0 ? (
        <div>
          <p>No characters in roster.</p> 
        </div>
      ) : (
        <>
          {characters.map(character => (
            <Link to={`/character/${character.id}`} key={character.id}>
              <div className="character-card m-5 bg-greenranger  bg-opacity-70 p-4 rounded-lg shadow-lg border-double border-4 borde-black-500">
                <h3 className="text-xl font-bold text-white">{character.name}</h3>
                <p className="text-black-500">Race: {character.race}</p>
                <p className="text-gray-300">Level: {character.level}</p>
                <p className="text-gray-300">Class: {character.klass}</p>
                <p className="text-gray-300">Exp: {character.xp}</p>
              </div>
            </Link>
          ))}
        </>
      )}
      {/* <Link to="/charactercreator">
        <button className="create-character-button bg-yellow-500 text-gray-900 py-3 px-4 rounded hover:bg-yellow-600 transition-colors">
          Create a Character
        </button>
      </Link> */}
    </div>
  )}
   <Link to="/charactercreator">
        <button className="create-character-button m-10 bg-yellow-500 text-gray-900 py-3 px-4 rounded hover:bg-yellow-600 transition-colors">
          Create a Character
        </button>
      </Link>
</div>

      
    )
  }
export default CharacterCards