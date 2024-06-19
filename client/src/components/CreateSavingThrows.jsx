import React from "react";

function CreateSavingThrows({ handleChange, charData }) {
    const { saving_throws } = charData;

    return (

        <div className="p-4 mx-auto">
  <label className="text-xl underline font-dragon">Saving Throws</label>
  <form>
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.strength_pro"
        checked={saving_throws.strength_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.strength"
        value={saving_throws.strength}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Strength</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.dexterity_pro"
        checked={saving_throws.dexterity_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.dexterity"
        value={saving_throws.dexterity}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Dexterity</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.constitution_pro"
        checked={saving_throws.constitution_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.constitution"
        value={saving_throws.constitution}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Constitution</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.intelligence_pro"
        checked={saving_throws.intelligence_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.intelligence"
        value={saving_throws.intelligence}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Intelligence</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.wisdom_pro"
        checked={saving_throws.wisdom_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.wisdom"
        value={saving_throws.wisdom}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Wisdom</label>
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name="saving_throws.charisma_pro"
        checked={saving_throws.charisma_pro}
        onChange={handleChange}
        className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"
      />
      <input
        type="number"
        name="saving_throws.charisma"
        value={saving_throws.charisma}
        onChange={handleChange}
        required
        className="w-16 bg-transparent border-b-2 border-black outline-none text-center"
      />
      <label className="text-lg font-dragon">Charisma</label>
    </div>
  </form>
</div>

    );
}

export default CreateSavingThrows;
