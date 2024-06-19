import React from 'react';

function CharacterSaving({ handleSubmit, savingThrows, handleChange }) {
    return (
        <div className="p-4 mx-auto">
            <label className='text-xl underline font-dragon'>Saving Throws</label>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.strength_pro"
                        checked={savingThrows.strength_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        //  className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-blue-600 checked:border-transparent focus:ring-0 focus:outline-none"
                        // className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-gray-400 checked:border-transparent focus:ring-0 focus:outline-none"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                   />

                    <input
                        type="number"
                        name="saving_throws.strength"
                        value={savingThrows.strength}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Strength</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.dexterity_pro"
                        checked={savingThrows.dexterity_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    
                    />
                    <input
                        type="number"
                        name="saving_throws.dexterity"
                        value={savingThrows.dexterity}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"

                    />
                    <label className="text-lg font-dragon">Dexterity</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.constitution_pro"
                        checked={savingThrows.constitution_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    
                    />
                    <input
                        type="number"
                        name="saving_throws.constitution"
                        value={savingThrows.constitution}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"

                    />
                    <label className="text-lg font-dragon">Constitution</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.intelligence_pro"
                        checked={savingThrows.intelligence_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    
                    />
                    <input
                        type="number"
                        name="saving_throws.intelligence"
                        value={savingThrows.intelligence}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"

                    />
                    <label className="text-lg font-dragon">Intelligence</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.wisdom_pro"
                        checked={savingThrows.wisdom_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    
                    />
                    <input
                        type="number"
                        name="saving_throws.wisdom"
                        value={savingThrows.wisdom}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"

                    />
                    <label className="text-lg font-dragon">Wisdom</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="saving_throws.charisma_pro"
                        checked={savingThrows.charisma_pro}
                        onChange={handleChange}
                        // className="mr-2"
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    
                    />
                    <input
                        type="number"
                        name="saving_throws.charisma"
                        value={savingThrows.charisma}
                        onChange={handleChange}
                        required
                        // className="border rounded p-1 mr-2 w-16"
                        className="w-16  bg-transparent border-b-2 border-black outline-none text-center"

                    />
                    <label className="text-lg font-dragon">Charisma</label>
                </div>
            </form>
        </div>
    );
}

export default CharacterSaving;
