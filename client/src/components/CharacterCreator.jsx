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
import backgroundImage from '/Assets/partchsmall.jpg'
import { useNavigate } from 'react-router-dom';




function CharacterCreator() {
    const navigate = useNavigate();

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



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const body = {
    //         character: {
    //             ...charData,
    //             stats: [charData.stats],  
    //             misc_stats: { ...charData.misc_stats },
    //             saving_throws: [charData.saving_throws],
    //             skills: [charData.skills],
    //             health: [charData.health],
    //             personal: [charData.personal],
    //             attacks: [charData.attacks],
    //             feats: [charData.feats],
    //             other: [charData.other],
    //             equipments: [charData.equipments]
    //         }
    //     };
    //     try {
    //         const response = await fetch('/api/create_character', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify(body)
    //         });
    //         const data = await response.json();
    //         console.log('Response from server:', data);
    //     } catch (error) {
    //         console.error('Error submitting data:', error);
    //     }
    // };
// ==================÷÷
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const body = {
    //         character: {
    //             ...charData,
    //             stats: [charData.stats],  
    //             misc_stats: { ...charData.misc_stats },
    //             saving_throws: [charData.saving_throws],
    //             skills: [charData.skills],
    //             health: [charData.health],
    //             personal: [charData.personal],
    //             attacks: [charData.attacks],
    //             feats: [charData.feats],
    //             other: [charData.other],
    //             equipments: [charData.equipments]
    //         }
    //     };

    //     fetch('/api/create_character', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(body)
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to create character');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Response from server:', data);
    //         // Redirect to userprofile page
    //         navigate('/userprofile');
    //     })
    //     .catch(error => {
    //         console.error('Error submitting data:', error);
    //     });
    // };

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
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

        fetch('/api/create_character', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create character');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
            // Show the alert
            setShowAlert(true);
            // Hide the alert after 3 seconds and navigate to userprofile
            setTimeout(() => {
                setShowAlert(false);
                navigate('/userprofile');
            }, 3000);
        })
        .catch(error => {
            console.error('Error submitting data:', error);
        });
    };


    return (
    
        <div className="charcreator relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Navbar/>
            <Outlet/>
            <div className="flex flex-wrap">
                <div className="w-full m-2 ">
                        {/* <h1 className="font-dragon text-2xl text-center underline">Create New Character</h1> */}
                        <CreateProfile className="w-full m-2 " handleSubmit={handleSubmit} handleChange={handleChange} charData={charData} />
                        <div className="relative">
            {showAlert && (
                  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purplerogue via-pink-500 to-iriswarlock text-white px-4 py-2 rounded-md shadow-md">
                {/* <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md"> */}
                    Character has been created successfully!
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your form elements go here */}
                {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button> */}
            </form>
        </div>
                </div>
                
                    <div className="w-full sm:w-1/6 mx-2 mb-4">
                        <CreateStats className="w-full sm:w-1/6 mx-2 mb-4" handleChange={handleChange} charData={charData} />
                    </div>
                    <div className="w-full sm:w-1/4 mx-2 my-4">
                        <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
                            <CreateMiscStats handleChange={handleChange} charData={charData} />
                            </div>
                    <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
                        <CreateSavingThrows handleChange={handleChange} charData={charData} />
                        </div>
                    <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">

                        <CreateSkills handleChange={handleChange} charData={charData} />
                    </div>
                </div>
                
                <div className="w-full sm:w-1/4 mx-2 my-4">
                    <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
                        <CreateHealth handleChange={handleChange} charData={charData} />
                        </div>
                
                <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
                    <CreateAttack handleChange={handleChange} charData={charData} />
                    </div>
                    
                <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
                    <CreateEquipment handleChange={handleChange} charData={charData}/>
                   </div>

                <div className="w-full mb-4 border border-black rounded-lg shadow-md p-4 outline-double">
   
                    <CreateOther handleChange={handleChange} charData={charData} />
                   </div>
            <button  className=" text-gray-900 bg-gradient-to-r from-brown-200 via-brown-300 to-brown-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-brown-100 dark:focus:ring-brown-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" onClick={handleSubmit}>Create Character</button>
            </div>

            <div className="w-full sm:w-1/4 mx-2 mb-4  border-black rounded-lg shadow-md p-4 outline-double">
                    
                    <CreatePersonal handleChange={handleChange} charData={charData} />
                <div className="w-full sm:w-1/4 mx-2 mb-4">
                       
                        
                        <CreateFeats handleChange={handleChange} charData={charData} />
                    </div>
                    </div>



            </div>
        </div>
    );
}

export default CharacterCreator;
