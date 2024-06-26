
import React from 'react';

function CharacterStats({ handleChange, stats }) {
    return (
        <form className="w-full max-w-md p-4">
            {/* // <form className="w-full max-w-md sm:max-w-sm p-4 bg-slate-400"> */}
                <div className="flex flex-col gap-4">
                {/* Strength */}
                        <label className="block  underline  font-dragon text-xl">Strength:</label>
                    <div className="border border-gray-300  rounded-lg shadow-md p-4 outline-double ">
             {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="strength"
                            value={stats.strength}
                            onChange={handleChange}
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"

                            required
                        />
                    </div>
                    {/* <div > */}
                    {/* <div className="flex items-center justify-center"> */}
                    <div className="flex flex-col items-center justify-center">
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="strength_mod"
                            value={stats.strength_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Dexterity */}
                        <label className="block mb-1 underline font-dragon text-xl">Dexterity:</label>
                {/* <div className="border border-gray-300 rounded-lg shadow-md p-4"> */}
                <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">

                <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="dexterity"
                            value={stats.dexterity}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded bg-transparent shadow-sm outline-none text-center "
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"


                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="dexterity_mod"
                            value={stats.dexterity_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Constitution */}
                        <label className="block mb-1 underline font-dragon text-xl">Constitution:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">

                    {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="constitution"
                            value={stats.constitution}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                            className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="constitution_mod"
                            value={stats.constitution_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Intelligence */}
                        <label className="block mb-1 underline font-dragon text-xl">Intelligence:</label>
                <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">
                            
                    {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="intelligence"
                            value={stats.intelligence}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                            className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="intelligence_mod"
                            value={stats.intelligence_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Wisdom */}
                        <label className="block mb-1 underline font-dragon text-xl">Wisdom:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">
                    {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="wisdom"
                            value={stats.wisdom}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                            className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="wisdom_mod"
                            value={stats.wisdom_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Charisma */}
                        <label className="block mb-1 underline font-dragon text-xl">Charisma:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">
                    {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="charisma"
                            value={stats.charisma}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                            className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="charisma_mod"
                            value={stats.charisma_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Wisdom Perception */}
                        <label className="block mb-1 underline font-dragon text-xl">Wisdom Perception:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double ">
                    {/* <div className="flex flex-col mb-2"> */}
             <div className="flex flex-col mb-2 items-center">

                        <input
                            type="number"
                            name="wis_perception"
                            value={stats.wis_perception}
                            onChange={handleChange}
                            // className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            // className="block w-12 p-2 rounded shadow-sm outline-none text-center"
                            // className="rounded shadow-sm outline-none text-center text-2xl"
                            className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                            required
                        />
                    </div>
                    {/* <div > */}
                    <div className="flex flex-col items-center justify-center">

                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="wis_perception_mod"
                            value={stats.wis_perception_mod}
                            onChange={handleChange}
                            // className="block w-16 p-2 rounded"
                            className="block w-16 p-2 bg-transparent rounded font-bold text-lg"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', 
                            }}
                            required
                        />
                    </div>
                </div>

            </div>
        </form>
    );
}

export default CharacterStats;
