import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";
import CharacterStats from "./CharacterStats";
import CharacterMisc from "./CharacterMisc";
import CharacterSaving from "./CharacterSaving";
import CharacterSkills from "./CharacterSkill";
import CharacterHealth from "./CharacterHealth";
import CharacterPersonal from "./CharacterPersonal";
import CharacterAttack from "./CharacterAttack";
import CharacterFeat from "./CharacterFeat";
import CharacterOther from "./CharacterOther";
import CharacterEquipment from "./CharacterEquipment";
import CharacterDeathSaves from "./CharacterDeathSaves";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

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
        },
        attacks:{
                name: "",
                attack_bonus: "",
                dmg: "",
                tipe: ""
            },
        feats:{
                features: "",
                traits: ""
            },
        other:{
            other_prof:"",
            languages:""

        },
        equipments:{
            equipment:"",
            equipment_stat:"",
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
                attacks: character.attacks[0],
                feats: character.feats[0],
                other: character.other[0],
                equipments: character.equipments[0],
                //next table here
            });
        }
    }, [character]);

    console.log(character);

  
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("saving_throws.")) {
            // Handling saving throws
            const savingThrowsName = name.split('.')[1]; 
            setProfData({
                ...profData,
                saving_throws: {
                    ...profData.saving_throws,
                    [savingThrowsName]: type === "checkbox" ? checked : value
                }
            });
        }else if (name.startsWith("skills.")) {
            // handling saving throws
            const skillsName = name.split('.')[1]; // Extracting the specific saving throw property
            setProfData({
                ...profData,
                skills: {
                    ...profData.skills,
                    [skillsName]: type === "checkbox" ? checked : value
                }
            });
        } else if (name in profData.stats) {
            // handling regular stats
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
            // handling  personal
            setProfData({
                ...profData,
                personal: {
                    ...profData.personal,
                    [name]: value
                }
            });
        } else if (name in profData.attacks) {
            // handling  attacks
            setProfData({
                ...profData,
                attacks: {
                    ...profData.attacks,
                    [name]: value
                }
            });
        } else if (name in profData.feats) {
            // handling  feats
            setProfData({
                ...profData,
                feats: {
                    ...profData.feats,
                    [name]: value
                }
            });
        } else if (name in profData.other) {
            // handling  other
            setProfData({
                ...profData,
                other: {
                    ...profData.other,
                    [name]: value
                }
            });
        } else if (name in profData.equipments) {
            // handling  equipments
            setProfData({
                ...profData,
                equipments: {
                    ...profData.equipments,
                    [name]: value
                }
            });
            // add here for next table
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
                misc_stats: profData.misc_stats, 
                saving_throws: [profData.saving_throws],
                skills: [profData.skills],
                health: [profData.health],
                personal:[profData.personal],
                attacks:[profData.attacks],
                feats: [profData.feats],
                other: [profData.other],
                equipments:[profData.equipments]
                // add the tables here as we go 
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
        <div >
            <Navbar/>
            <Outlet/>
            {/* <CharacterProfile character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData} />
            <CharacterStats character={character} handleSubmit={handleSubmit} handleChange={handleChange} profData={profData} setProfData={setProfData} stats={profData.stats} />
            <CharacterMisc handleChange={handleChange} profData={profData} />
            <CharacterSaving handleSubmit={handleSubmit} savingThrows={profData.saving_throws} handleChange={handleChange} />
            <CharacterSkills handleSubmit={handleSubmit} skills={profData.skills} handleChange={handleChange}/> */}
            {/* <div className="flex flex-wrap">

                <div className="w-full m-2">
                    <CharacterProfile
                        character={character}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        profData={profData}
                        setProfData={setProfData}
                    />
                </div>


            <div className="w-half sm:w-1/6">
                <CharacterStats
                    character={character}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    profData={profData}
                    setProfData={setProfData}
                    stats={profData.stats}
                />
            </div>

            <div className="w-half my-4 bg-slate-400 sm:w-1/4 ">
                <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                    <CharacterMisc
                        handleChange={handleChange}
                        profData={profData}
                    />
                </div>
                <div className="w-half m-2 border border-gray-300 rounded-lg shadow-md  outline-double">
                    <CharacterSaving
                        handleSubmit={handleSubmit}
                        savingThrows={profData.saving_throws}
                        handleChange={handleChange}
                    />
                </div>


                <div className="w-half m-2 border border-gray-300 rounded-lg shadow-md  outline-double">
                <CharacterSkills
                    handleSubmit={handleSubmit}
                    skills={profData.skills}
                    handleChange={handleChange}
                    />
                </div>
            <CharacterHealth handleSubmit={handleSubmit} health={profData.health} handleChange={handleChange}/>
            <CharacterDeathSaves/>
            </div>
        </div>
            <CharacterPersonal handleSubmit={handleSubmit} personal={profData.personal} handleChange={handleChange}/>
            <CharacterAttack handleSubmit={handleSubmit} attacks={profData.attacks} handleChange={handleChange}/>
            <CharacterFeat handleSubmit={handleSubmit} feats={profData.feats} handleChange={handleChange}/>
            <CharacterOther handleSubmit={handleSubmit} other={profData.other} handleChange={handleChange}/>
            <CharacterEquipment handleSubmit={handleSubmit} equipments={profData.equipments} handleChange={handleChange}/>

            <button type="submit" onClick={handleSubmit}>Update Character</button>

        

        </div> */}
        
        <div className="flex flex-wrap">

    <div className="w-full m-2">
        <CharacterProfile
            character={character}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            profData={profData}
            setProfData={setProfData}
        />
    </div>


    <div className="w-half sm:w-1/6">
        <CharacterStats
            character={character}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            profData={profData}
            setProfData={setProfData}
            stats={profData.stats}
        />
    </div>


    <div className="w-half sm:w-1/4 my-4 bg-slate-400 mr-2">
        <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
            <CharacterMisc
                handleChange={handleChange}
                profData={profData}
            />
        </div>
        <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
            <CharacterSaving
                handleSubmit={handleSubmit}
                savingThrows={profData.saving_throws}
                handleChange={handleChange}
            />
        </div>
        <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
            <CharacterSkills
                handleSubmit={handleSubmit}
                skills={profData.skills}
                handleChange={handleChange}
            />
        </div>
    </div>

    {/* Character Health and Death Saves (1/4 width each) */}
    <div className="w-half sm:w-1/4 my-4 bg-slate-400">
        <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
            <CharacterHealth
                handleSubmit={handleSubmit}
                health={profData.health}
                handleChange={handleChange}
            />
        </div>
        <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">
            <CharacterDeathSaves />
        </div>
    {/* <div className="w-half sm:w-1/6"> */}
    <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-4 outline-double">

        <CharacterAttack
            handleSubmit={handleSubmit}
            attacks={profData.attacks}
            handleChange={handleChange}
        />
    </div>
    <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-2 outline-double">
        <CharacterEquipment
            handleSubmit={handleSubmit}
            equipments={profData.equipments}
            handleChange={handleChange}
        />
    </div>
    <div className="w-full mb-4 border border-gray-300 rounded-lg shadow-md p-2 outline-double">
        <CharacterOther
            handleSubmit={handleSubmit}
            other={profData.other}
            handleChange={handleChange}
        />
    </div>
    </div>

    <div className="w-full m-2">
        <CharacterPersonal
            handleSubmit={handleSubmit}
            personal={profData.personal}
            handleChange={handleChange}
        />
    </div>

    <div className="w-half sm:w-1/4">
        <CharacterFeat
            handleSubmit={handleSubmit}
            feats={profData.feats}
            handleChange={handleChange}
        />
    </div>
</div>
<button type="submit" onClick={handleSubmit}>Update Character</button>

</div>


    );
}

export default CharacterSheet;

