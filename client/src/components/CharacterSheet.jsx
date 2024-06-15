import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile"
import CharacterStats from "./CharacterStats"


function CharacterSheet(){
    const { character_id } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
   

    const [profData, setProfData] = useState({
        name: "",
        klass: "",
        level: "",
        background: "",
        race: "",
        xp: "",
        alignment: "",
        stats: {
            strength_mod: "",
            strength: "",
            dexterity_mod: "",
            dexterity: "",
            constitution_mod: "",
            constitution: "",
            intelligence_mod: "",
            intelligence: "",
            wisdom_mod: "",
            wisdom: "",
            charisma_mod: "",
            charisma: "",
            wis_perception: "",
            wis_perception_mod: ""
        }
      });
 
useEffect(() => {
    if (character) {
        setProfData({
       
        name: character.name,
        klass: character.klass,
        level: character.level,
        background: character.background,
        race: character.race,
        xp: character.xp,
        alignment: character.alignment,
        stats: character.stats[0] //
            
        })
    }


}, [character]);



// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfData({
//         ...profData,
//         [name]: value
        
//     });
// };
const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in profData.stats) {
        setProfData({
            ...profData,
            stats: {
                ...profData.stats,
                [name]: value
            }
        });
    } else {
        setProfData({
            ...profData,
            [name]: value
        });
    }
};
const body = {character: { name: profData.name,
    klass: profData.klass,
    level:  profData.level,
    background: profData.background,
    race: profData.race,
    xp: profData.xp,
    alignment: profData.alignment
}}

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
    
    const handleSubmit = (e) => {
        e.preventDefault();
            console.log('bout to fetch')
            fetch(`/api/character/${character_id}`,{
          
                method : 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            })
            console.log('finish to fetch')

            console.log(body)
    
    };
    return(
        <div>

            <CharacterProfile character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData}/>
            <CharacterStats character ={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData}  stats={profData.stats}/>
            this is where the character sheet lives
            <button type="submit" onClick={handleSubmit}>Update Character</button>
        </div>
    )
}
export default CharacterSheet