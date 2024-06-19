import React from "react";

function CreateStats({ handleChange, charData }) {
    return (
   

            // <form>
            //     <div>
            //         <label>Strength:
            //             <input type="number" name="stats.strength" value={charData.stats.strength} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Strength Modifier:
            //             <input type="number" name="stats.strength_mod" value={charData.stats.strength_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Dexterity:
            //             <input type="number" name="stats.dexterity" value={charData.stats.dexterity} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Dexterity Modifier:
            //             <input type="number" name="stats.dexterity_mod" value={charData.stats.dexterity_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Constitution:
            //             <input type="number" name="stats.constitution" value={charData.stats.constitution} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Constitution Modifier:
            //             <input type="number" name="stats.constitution_mod" value={charData.stats.constitution_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Intelligence:
            //             <input type="number" name="stats.intelligence" value={charData.stats.intelligence} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Intelligence Modifier:
            //             <input type="number" name="stats.intelligence_mod" value={charData.stats.intelligence_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Wisdom:
            //             <input type="number" name="stats.wisdom" value={charData.stats.wisdom} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Wisdom Modifier:
            //             <input type="number" name="stats.wisdom_mod" value={charData.stats.wisdom_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Charisma:
            //             <input type="number" name="stats.charisma" value={charData.stats.charisma} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Charisma Modifier:
            //             <input type="number" name="stats.charisma_mod" value={charData.stats.charisma_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Perception:
            //             <input type="number" name="stats.wis_perception" value={charData.stats.wis_perception} onChange={handleChange} required />
            //         </label>
            //     </div>
            //     <div>
            //         <label>Perception Modifier:
            //             <input type="number" name="stats.wis_perception_mod" value={charData.stats.wis_perception_mod} onChange={handleChange} required />
            //         </label>
            //     </div>
            // </form>
      
            <div className="w-full max-w-md p-4">

    <form>
        <div className="flex flex-col gap-4">

            {/* Strength */}
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Strength:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.strength"
                        value={charData.stats.strength}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.strength_mod"
                        value={charData.stats.strength_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Dexterity:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.dexterity"
                        value={charData.stats.dexterity}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.dexterity_mod"
                        value={charData.stats.dexterity_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Constitution:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.constitution"
                        value={charData.stats.constitution}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.constitution_mod"
                        value={charData.stats.constitution_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Intelligence:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.intelligence"
                        value={charData.stats.intelligence}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.intelligence_mod"
                        value={charData.stats.intelligence_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Wisdom:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.wisdom"
                        value={charData.stats.wisdom}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.wisdom_mod"
                        value={charData.stats.wisdom_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Charisma:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.charisma"
                        value={charData.stats.charisma}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.charisma_mod"
                        value={charData.stats.charisma_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
            <div className="border border-gray-300 rounded-lg shadow-md p-4 outline-double">
                <label className="block mb-1 underline font-dragon text-xl">Wisdom Perception:</label>
                <div className="flex flex-col mb-2 items-center">
                    <input
                        type="number"
                        name="stats.wis_perception"
                        value={charData.stats.wis_perception}
                        onChange={handleChange}
                        className="w-16 border-b-2 bg-transparent border-black outline-none text-center text-2xl"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className="block mb-1 underline font-dragon">Modifier:</label>
                    <input
                        type="number"
                        name="stats.wis_perception_mod"
                        value={charData.stats.wis_perception_mod}
                        onChange={handleChange}
                        className="w-16 p-2 bg-transparent rounded font-bold text-lg"
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
</div>

    );
}

export default CreateStats;

