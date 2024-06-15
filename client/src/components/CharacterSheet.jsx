

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";
import CharacterStats from "./CharacterStats";
import CharacterMisc from "./CharacterMisc";
import CharacterSaving from "./CharacterSaving";

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
        },
        saving_throws: {
            strength: "",
            strength_pro: false,
            dexterity: "",
            dexterity_pro: false,
            constitution: "",
            constitution_pro: false,
            intelligence: "",
            intelligence_pro: false,
            wisdom: "",
            wisdom_pro: false,
            charisma: "",
            charisma_pro: false,
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
                stats: character.stats[0],
                misc_stats: character.misc_stats[0],
                saving_throws: character.saving_throws[0]
            });
        }
    }, [character]);

    console.log(character);
  
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("saving_throws.")) {
            // Handling saving throws
            const savingThrowsName = name.split('.')[1]; // Extracting the specific saving throw property
            setProfData({
                ...profData,
                saving_throws: {
                    ...profData.saving_throws,
                    [savingThrowsName]: type === "checkbox" ? checked : value
                }
            });
        } else if (name in profData.stats) {
            // Handling regular stats
            setProfData({
                ...profData,
                stats: {
                    ...profData.stats,
                    [name]: value
                }
            });
        } else if (name in profData.misc_stats) {
            // Handling misc stats
            setProfData({
                ...profData,
                misc_stats: {
                    ...profData.misc_stats,
                    [name]: value
                }
            });
        } else {
            // Default case for other inputs
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
                misc_stats: profData.misc_stats,  // Ensure profData.misc_stats contains { inspiration: "", prof_bonus: "" }
                saving_throws: [profData.saving_throws]
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
            <CharacterProfile character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData} />
            <CharacterStats character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData} stats={profData.stats} />
            <CharacterMisc handleChange={handleChange} profData={profData} />
            <CharacterSaving handleSubmit={handleSubmit} savingThrows={profData.saving_throws} handleChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Update Character</button>
        </div>
    );
}

export default CharacterSheet;

