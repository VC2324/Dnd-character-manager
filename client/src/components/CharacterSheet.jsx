import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile"
import CharacterStats from "./CharacterStats"


function CharacterSheet(){
    const { character_id } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
   

    // const body = {character: { name: (Math.random() + 1).toString(36).substring(7)} }

    const [profData, setProfData] = useState({
        name: "",
        klass: "",
        level: "",
        background: "",
        race: "",
        xp: "",
        alignment: ""
      });
 
//       const [statData, setStatData] = useState({
//         strength_mod: "",
//         strength: "",
//         dexterity_mod: "",
//         dexterity: "",
//         constitution_mod: "",
//         constitution: "",
//         intelligence_mod: "",
//         intelligence: "",
//         wisdom_mod: "",
//         wisdom: "",
//         charisma_mod: "",
//         charisma: "",
//         wis_perception: "",
//         wis_perception_mod: ""
//       });
      
// useEffect(() => {
//     if (character) {
//         setProfData({
//         strength_mod: character.strength_mod,
//         strength: character.strength,
//         dexterity_mod: character.dexterity_mod,
//         dexterity: character.dexterity,
//         constitution_mod: character.constitution_mod,
//         constitution: character.constitution,
//         intelligence_mod: character.intelligence_mod,
//         intelligence: character.intelligence,
//         wisdom_mod: character.wisdom_mod,
//         wisdom: character.wisdom,
//         charisma_mod: character.charisma_mod,
//         charisma: character.charisma,
//         wis_perception: character.wis_perception,
//         wis_perception_mod: character.wis_perception_mod

            
//         })
//     }


// }, [character]);

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
            
        })
    }


}, [character]);



const handleChange = (e) => {
    const { name, value } = e.target;
    setProfData({
        ...profData,
        [name]: value
        
    });
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
            // console.log(data)
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
            <CharacterStats character ={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData}/>
            this is where the character sheet lives
        </div>
    )
}
export default CharacterSheet