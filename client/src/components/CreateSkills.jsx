import React from "react";

function CreateSkills({ handleChange, charData }) {
 
  return (

    <form>
  <div className="p-4 mx-auto">
    <label className='text-xl underline font-dragon'>Skills</label>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.acrobatics"
        value={charData.acrobatics}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.acrobatics_pro"
        checked={charData.acrobatics_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Acrobatics</label>
    </div>

    {/* Animal Handling */}
    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.animal_handling"
        value={charData.animal_handling}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.animal_handling_pro"
        checked={charData.animal_handling_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Animal Handling</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.arcana"
        value={charData.arcana}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.arcana_pro"
        checked={charData.arcana_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Arcana</label>
    </div>

    {/* Athletics */}
    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.athletics"
        value={charData.athletics}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.athletics_pro"
        checked={charData.athletics_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Athletics</label>
    </div>

    {/* Deception */}
    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.deception"
        value={charData.deception}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.deception_pro"
        checked={charData.deception_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Deception</label>
    </div>

    {/* History */}
    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.history"
        value={charData.history}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.history_pro"
        checked={charData.history_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">History</label>
    </div>

   <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.insight"
        value={charData.insight}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.insight_pro"
        checked={charData.insight_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Insight</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.intimidation"
        value={charData.intimidation}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.intimidation_pro"
        checked={charData.intimidation_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Intimidation</label>
    </div>



    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.investigation"
        value={charData.investigation}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.investigation_pro"
        checked={charData.investigation_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Investigation</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.medicine"
        value={charData.medicine}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.medicine_pro"
        checked={charData.medicine_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Medicine</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.nature"
        value={charData.nature}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.nature_pro"
        checked={charData.nature_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Nature</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.perception"
        value={charData.perception}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.perception_pro"
        checked={charData.perception_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Perception</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.performance"
        value={charData.performance}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.performance_pro"
        checked={charData.performance_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Performance</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.persuasion"
        value={charData.persuasion}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.persuasion_pro"
        checked={charData.persuasion_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Persuasion</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.religion"
        value={charData.religion}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.religion_pro"
        checked={charData.religion_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Religion</label>
    </div>

    {/* Sleight of Hand */}
    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.sleight_of_hand"
        value={charData.sleight_of_hand}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.sleight_of_hand_pro"
        checked={charData.sleight_of_hand_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Sleight of Hand</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.stealth"
        value={charData.stealth}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.stealth_pro"
        checked={charData.stealth_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Stealth</label>
    </div>


    <div className="flex items-center mb-4">
      <input
        type="number"
        name="skills.survival"
        value={charData.survival}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <input
        type="checkbox"
        name="skills.survival_pro"
        checked={charData.survival_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <label className="text-lg font-dragon">Survival</label>
    </div>
  </div>
</form>

  );
}

export default CreateSkills;
