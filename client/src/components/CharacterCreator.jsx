import React, { useState } from "react";
import CreateProfile from './CreateProfile';
import CreateStats from "./CreateStats";
import CreateMiscStats from "./CreateMiscStats";
import CreateSavingThrows from "./CreateSavingThrows";
import CreateSkills from "./CreateSkills";
import CreateHealth from "./CreateHealth";
import CreatePersonal from "./CreatePersonal";
import CreateAttack from "./CreateAttack"
import CreateFeats from "./CreateFeats";
import CreateOther from "./CreateOther";
import CreateEquipment from "./CreateEquipment";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function CharacterCreator() {
    const [charData, setCharData] = useState({
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
        health: {
            armor_class: "",
            initiative: "",
            speed: "",
            max_hp: "",
            current_hp: "",
            temp_hp: "",
            hit_total: "",
            hit_dice: "",
        },
        personal: {
            personality_traits: "",
            ideals: "",
            bonds: "",
            flaws: ""
        },
        attacks: {
            name: "",
            attack_bonus: "",
            dmg: "",
            tipe: ""
        },
        feats: {
            features: "",
            traits: ""
        },
        other: {
            other_prof: "",
            languages: ""
        },
        equipments: {
            equipment: "",
            equipment_stat: "",
        }
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const keys = name.split('.');
        if (keys.length === 2) {
            setCharData(prevState => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: type === "checkbox" ? checked : value
                }
            }));
        } else {
            setCharData({
                ...charData,
                [name]: type === "checkbox" ? checked : value
            });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            character: {
                ...charData,
                stats: [charData.stats],  
                misc_stats: { ...charData.misc_stats },
                saving_throws: [charData.saving_throws],
                skills: [charData.skills],
                health: [charData.health],
                personal: [charData.personal],
                attacks: [charData.attacks],
                feats: [charData.feats],
                other: [charData.other],
                equipments: [charData.equipments]
            }
        };
        try {
            const response = await fetch('/api/create_character', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="charcreator">
            <Navbar/>
            <Outlet/>
            <h1>Create a Character</h1>
            <CreateProfile handleSubmit={handleSubmit} handleChange={handleChange} charData={charData} />
            <CreateStats handleChange={handleChange} charData={charData} />
            <CreateMiscStats handleChange={handleChange} charData={charData} />
            <CreateSavingThrows handleChange={handleChange} charData={charData} />
            <CreateSkills handleChange={handleChange} charData={charData} />
            <CreateHealth handleChange={handleChange} charData={charData} />
            <CreatePersonal handleChange={handleChange} charData={charData} />
            <CreateAttack handleChange={handleChange} charData={charData} />
            <CreateFeats handleChange={handleChange} charData={charData} />
            <CreateOther handleChange={handleChange} charData={charData} />
            <CreateEquipment handleChange={handleChange} charData={charData}/>



            <button type="submit" onClick={handleSubmit}>Create Character</button>
        </div>
    );
}

export default CharacterCreator;
