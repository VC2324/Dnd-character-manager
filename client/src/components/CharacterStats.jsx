
import React from 'react';

function CharacterStats({ handleChange, stats }) {
    return (
        <form className="w-full max-w-md p-4">
            <div className="flex flex-col gap-4">
                {/* Strength */}
                        <label className="block  underline font-dragon">Strength:</label>
              
                <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">

                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="strength"
                            value={stats.strength}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded shadow-sm outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="strength_mod"
                            value={stats.strength_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Dexterity */}
                        <label className="block mb-1 underline font-dragon">Dexterity:</label>
                {/* <div className="border border-gray-300 rounded-lg shadow-md p-4"> */}
                <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">

                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="dexterity"
                            value={stats.dexterity}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="dexterity_mod"
                            value={stats.dexterity_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Constitution */}
                        <label className="block mb-1 underline font-dragon">Constitution:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">

                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="constitution"
                            value={stats.constitution}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="constitution_mod"
                            value={stats.constitution_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Intelligence */}
                        <label className="block mb-1 underline font-dragon">Intelligence:</label>
                <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">
                            
                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="intelligence"
                            value={stats.intelligence}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="intelligence_mod"
                            value={stats.intelligence_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Wisdom */}
                        <label className="block mb-1 underline font-dragon">Wisdom:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">
                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="wisdom"
                            value={stats.wisdom}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="wisdom_mod"
                            value={stats.wisdom_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Charisma */}
                        <label className="block mb-1 underline font-dragon">Charisma:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">
                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="charisma"
                            value={stats.charisma}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="charisma_mod"
                            value={stats.charisma_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
                            }}
                            required
                        />
                    </div>
                </div>

                {/* Wisdom Perception */}
                        <label className="block mb-1 underline font-dragon">Wisdom Perception:</label>
                        <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double w-1/4">
                    <div className="flex flex-col mb-2">
                        <input
                            type="number"
                            name="wis_perception"
                            value={stats.wis_perception}
                            onChange={handleChange}
                            className="block w-12 p-2 rounded border focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div >
                        <label className="block mb-1 underline font-dragon">Modifier:</label>
                        <input
                            type="number"
                            name="wis_perception_mod"
                            value={stats.wis_perception_mod}
                            onChange={handleChange}
                            className="block w-16 p-2 rounded"
                            style={{
                                border: '5px solid #000',
                                borderRadius: '0px 0px 40px 40px',
                                outline: 'none',
                                textAlign: 'center', // Center-align the input value
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
