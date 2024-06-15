import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";
import CharacterStats from "./CharacterStats";
import CharacterMisc from "./CharacterMisc";
import CharacterSaving from "./CharacterSaving";
import CharacterSkills from "./CharacterSkill";
import CharacterHealth from "./CharacterHealth";
import CharacterPersonal from "./CharacterPersonal";

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
        },
        skills: {
            acrobatics: "",
            acrobatics_pro: false,
            animal_handling: "",
            animal_handling_pro: false,
            arcana: "",
            arcana_pro: false,
            athletics: "",
            athletics_pro: false,
            deception: "",
            deception_pro: false,
            history: "",
            history_pro: false,
            insight: "",
            insight_pro: false,
            intimidation: "",
            intimidation_pro: false,
            investigation: "",
            investigation_pro: false,
            medicine: "",
            medicine_pro: false,
            nature: "",
            nature_pro: false,
            perception: "",
            perception_pro: false,
            performance: "",
            performance_pro: false,
            persuasion: "",
            persuasion_pro: false,
            religion: "",
            religion_pro: false,
            sleight_of_hand: "",
            sleight_of_hand_pro: false,
            stealth: "",
            stealth_pro: false,
            survival: "",
            survival_pro: false
        },
        health:{
            armor_class: "",
            initiative: "",
            speed: "",
            max_hp: "",
            current_hp: "",
            temp_hp: "",
            hit_total: "",
            hit_dice: "",    
         },
        personal:{
            personality_traits: "",
            ideals: "",
            bonds: "",
            flaws: ""
        }
        // add here for next state
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
                saving_throws: character.saving_throws[0],
                skills: character.skills[0],
                health: character.health[0],
                personal: character.personal[0],
                //next table here
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
        }else if (name.startsWith("skills.")) {
            // Handling saving throws
            const skillsName = name.split('.')[1]; // Extracting the specific saving throw property
            setProfData({
                ...profData,
                skills: {
                    ...profData.skills,
                    [skillsName]: type === "checkbox" ? checked : value
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
            // misc stats
            setProfData({
                ...profData,
                misc_stats: {
                    ...profData.misc_stats,
                    [name]: value
                }
            });
        } else if (name in profData.health) {
            // health
            setProfData({
                ...profData,
                health: {
                    ...profData.health,
                    [name]: value
                }
            });
        } else if (name in profData.personal) {
            // Handling  personal
            setProfData({
                ...profData,
                personal: {
                    ...profData.personal,
                    [name]: value
                }
            });
            // add here for next table
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
                // add the tables here as we go 
                ...profData,
                stats: [profData.stats],
                misc_stats: profData.misc_stats, 
                saving_throws: [profData.saving_throws],
                skills: [profData.skills],
                health: [profData.health],
                personal:[profData.personal]
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
            <CharacterSkills handleSubmit={handleSubmit} skills={profData.skills} handleChange={handleChange}/>
            <CharacterHealth handleSubmit={handleSubmit} health={profData.health} handleChange={handleChange}/>
            {/* this is where deathsaving throws will be that is last cause its just front end */}
            <CharacterPersonal handleSubmit={handleSubmit} personal={profData.personal} handleChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Update Character</button>

        </div>
    );
}

export default CharacterSheet;

