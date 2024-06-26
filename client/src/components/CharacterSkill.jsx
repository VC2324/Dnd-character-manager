import React from 'react';

function CharacterSkills({ handleSubmit, skills, handleChange }) {
    return (
        <div className="p-4  mx-auto">
            <label className='text-xl underline font-dragon'>Skills</label>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.acrobatics_pro"
                        checked={skills.acrobatics_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.acrobatics"
                        value={skills.acrobatics}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Acrobatics</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.animal_handling_pro"
                        checked={skills.animal_handling_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.animal_handling"
                        value={skills.animal_handling}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Animal Handling</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.arcana_pro"
                        checked={skills.arcana_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.arcana"
                        value={skills.arcana}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Arcana</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.athletics_pro"
                        checked={skills.athletics_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.athletics"
                        value={skills.athletics}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Athletics</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.deception_pro"
                        checked={skills.deception_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.deception"
                        value={skills.deception}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Deception</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.history_pro"
                        checked={skills.history_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.history"
                        value={skills.history}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">History</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.insight_pro"
                        checked={skills.insight_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.insight"
                        value={skills.insight}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Insight</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.intimidation_pro"
                        checked={skills.intimidation_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.intimidation"
                        value={skills.intimidation}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Intimidation</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.investigation_pro"
                        checked={skills.investigation_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.investigation"
                        value={skills.investigation}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Investigation</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.medicine_pro"
                        checked={skills.medicine_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.medicine"
                        value={skills.medicine}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Medicine</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.nature_pro"
                        checked={skills.nature_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.nature"
                        value={skills.nature}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Nature</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.perception_pro"
                        checked={skills.perception_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.perception"
                        value={skills.perception}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Perception</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.performance_pro"
                        checked={skills.performance_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.performance"
                        value={skills.performance}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Performance</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.persuasion_pro"
                        checked={skills.persuasion_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.persuasion"
                        value={skills.persuasion}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Persuasion</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.religion_pro"
                        checked={skills.religion_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.religion"
                        value={skills.religion}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Religion</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.sleight_of_hand_pro"
                        checked={skills.sleight_of_hand_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.sleight_of_hand"
                        value={skills.sleight_of_hand}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Sleight of Hand</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.stealth_pro"
                        checked={skills.stealth_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.stealth"
                        value={skills.stealth}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Stealth</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="skills.survival_pro"
                        checked={skills.survival_pro}
                        onChange={handleChange}
                        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="skills.survival"
                        value={skills.survival}
                        onChange={handleChange}
                        required
                        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
                    />
                    <label className="text-lg font-dragon">Survival</label>
                </div>
            </form>
        </div>
    );
}

export default CharacterSkills;