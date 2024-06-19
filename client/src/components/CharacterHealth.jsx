import React from 'react';

function CharacterHealth({ handleSubmit, health, handleChange }) {
    return (
        <div className="p-4  ">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-4 " >
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0 ">
                        <label className="block  text-center underline font-dragon">Armor Class</label>
                        <input
                            type="number"
                            name="armor_class"
                            value={health.armor_class}
                            onChange={handleChange}
                            required
                            className=" bg-transparent rounded p-1 w-full text-center text-xl"
                            // className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                        />
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block m-3 text-center font-dragon underline">Initiative</label>
                        <input
                            type="number"
                            name="initiative"
                            value={health.initiative}
                            onChange={handleChange}
                            required
                            // className="border rounded p-1 w-full"
                            className="  text-xl bg-transparent rounded p-1 w-full text-center"

                        />
                    </div>
                    <div className="w-full sm:w-1/3">
                        <label className="block m-3 text-center font-dragon underline">Speed</label>
                        <input
                            type="number"
                            name="speed"
                            value={health.speed}
                            onChange={handleChange}
                            required
                            // className="border rounded p-1 w-full"
                            className="  text-xl bg-transparent rounded p-1 w-full text-center"

                        />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {/* Row 2: Max HP, Current HP, Temporary HP */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <label className="block text-center mx-5 font-dragon underline">Max <></>HP</label>
                        <input
                            type="number"
                            name="max_hp"
                            value={health.max_hp}
                            onChange={handleChange}
                            required
                            // className="border rounded p-1 w-full"
                            className="  text-xl bg-transparent rounded p-1 w-full text-center"

                        />
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-4">
                        <label className="block text-center font-dragon underline">Current HP</label>
                        <input
                            type="number"
                            name="current_hp"
                            value={health.current_hp}
                            onChange={handleChange}
                            required
                            // className="border rounded p-1 w-full"
                            className="  text-xl bg-transparent rounded p-1 w-full text-center"

                        />
                    </div>
                    
                    <div className="w-full sm:w-1/3">
                        <label className="block text-center font-dragon underline">Temporary HP</label>
                        <input
                            type="number"
                            name="temp_hp"
                            value={health.temp_hp}
                            onChange={handleChange}
                            required
                            // className="border rounded p-1 w-full"
                            className="  text-xl bg-transparent rounded p-1 w-full text-center"

                        />
                    </div>
                </div>
                
                <div className="flex flex-wrap my-4">

                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                    <label className="block text-center font-dragon underline">Hit Dice Total</label>
                    <input
                        type="number"
                        name="hit_total"
                        value={health.hit_total}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 w-full text-center"
                        className="  text-xl bg-transparent rounded p-1 w-full text-center"

                    />
                </div>
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                    <label className="block text-center font-dragon underline">Hit<br></br> Dice</label>
                    <input
                        type="number"
                        name="hit_dice"
                        value={health.hit_dice}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 w-full text-center"
                        className="  text-xl bg-transparent rounded p-1 w-full text-center"

                    />
                </div>
                </div>
            </form>
        </div>
    );
}

export default CharacterHealth;
