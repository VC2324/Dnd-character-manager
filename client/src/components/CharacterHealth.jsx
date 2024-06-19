// function CharacterHealth({handleSubmit, health, handleChange} ){
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Armor Class:<input type="number" name="armor_class" value={health.armor_class} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Initiative:<input type="number" name="initiative" value={health.initiative} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Speed:<input type="number" name="speed" value={health.speed} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Max HP:<input type="number" name="max_hp" value={health.max_hp} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Current HP:<input type="number" name="current_hp" value={health.current_hp} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Temporary HP:<input type="number" name="temp_hp" value={health.temp_hp} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Hit Dice Total:<input type="number" name="hit_total" value={health.hit_total} onChange={handleChange} required /></label>
//                 </div>
//                 <div>
//                     <label>Hit Dice:<input type="number" name="hit_dice" value={health.hit_dice} onChange={handleChange} required /></label>
//                 </div>

//             </form>
//         </div>
//     )
    
// }

// export default CharacterHealth

import React from 'react';

function CharacterHealth({ handleSubmit, health, handleChange }) {
    return (
        <div className="p-4 w-1/4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-4">
                    {/* Row 1: Armor Class, Initiative, Speed */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block text-center">Armor Class:</label>
                        <input
                            type="number"
                            name="armor_class"
                            value={health.armor_class}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block m-3 text-center">Initiative</label>
                        <input
                            type="number"
                            name="initiative"
                            value={health.initiative}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                    <div className="w-full sm:w-1/3">
                        <label className="block m-3  text-center">Speed</label>
                        <input
                            type="number"
                            name="speed"
                            value={health.speed}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {/* Row 2: Max HP, Current HP, Temporary HP */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block text-center">Max HP</label>
                        <input
                            type="number"
                            name="max_hp"
                            value={health.max_hp}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block text-center">Current HP</label>
                        <input
                            type="number"
                            name="current_hp"
                            value={health.current_hp}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                    <div className="w-full sm:w-1/3">
                        <label className="block text-center">Temporary HP</label>
                        <input
                            type="number"
                            name="temp_hp"
                            value={health.temp_hp}
                            onChange={handleChange}
                            required
                            className="border rounded p-1 w-full"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-center">Hit Dice Total</label>
                    <input
                        type="number"
                        name="hit_total"
                        value={health.hit_total}
                        onChange={handleChange}
                        required
                        className="border rounded p-1 w-full"
                    />
                </div>
                <div>
                    <label className="block text-center">Hit Dice</label>
                    <input
                        type="number"
                        name="hit_dice"
                        value={health.hit_dice}
                        onChange={handleChange}
                        required
                        className="border rounded p-1 w-1/4 text-center"
                    />
                </div>
            </form>
        </div>
    );
}

export default CharacterHealth;
