import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";
import CharacterStats from "./CharacterStats";
import CharacterMisc from "./CharacterMisc";

function CharacterSheet() {
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
        },
        misc_stats: {
            inspiration: "",
            prof_bonus: ""
          }
      
    })

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
                stats: character.stats[0] ,
                misc_stats: character.misc_stats ? character.misc_stats[0] : { inspiration: "", prof_bonus: "" }

            });
        }
    }, [character]);

    
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
    } else if (name in profData.misc_stats) {
      setProfData({
        ...profData,
        misc_stats: {
          ...profData.misc_stats,
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
    const fetchCharacter = async () => {
        try {
            const response = await fetch(`/api/character/${character_id}`);
            if (response.ok) {
                const data = await response.json();
                setCharacter(data);
            } else {
                throw new Error("Failed to fetch character");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchCharacter();
    }, [character_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            character: {
                ...profData,
                stats: [profData.stats],
                misc_stats: [profData.misc_stats]
            }
        };
        try {
            const response = await fetch(`/api/character/${character_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <CharacterProfile character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData}  />
            <CharacterStats character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData}  stats={profData.stats} />
            <CharacterMisc handleChange={handleChange} profData={profData} />
            <button type="submit" onClick={handleSubmit}>Update Character</button>
        </div>
    );
}

export default CharacterSheet;
