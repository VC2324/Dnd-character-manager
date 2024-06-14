import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile"


function CharacterSheet(){
    const { character_id } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
    


    useEffect(() => {
        fetch(`/api/character/${character_id}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Failed to fetch character");
            }
        })
        .then(data => {
            console.log(data)
            setCharacter(data)
        })
        .catch(error => {
            setError(error.message)
        });
    }, [character_id]);

    return(
        <div>

            <CharacterProfile character={character} />
            this is where the character sheet lives
        </div>
    )
}
export default CharacterSheet