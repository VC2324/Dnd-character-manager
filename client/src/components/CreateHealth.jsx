import React from "react";

function CreateHealth({ handleSubmit, handleChange, charData }) {
  return (

    <form onSubmit={handleSubmit} className="p-4 mx-auto">
  <div className="flex flex-wrap mb-4">

    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
      <label className="block text-center underline font-dragon">Armor Class</label>
      <input
        type="number"
        name="health.armor_class"
        value={charData.armor_class}
        onChange={handleChange}
        required
        className="bg-transparent rounded p-1 w-full text-center text-xl"
      />
    </div>




    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
      <label className="block m-3 text-center font-dragon underline">Initiative</label>
      <input
        type="number"
        name="health.initiative"
        value={charData.initiative}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>


    <div className="w-full sm:w-1/3">
      <label className="block m-3 text-center font-dragon underline">Speed</label>
      <input
        type="number"
        name="health.speed"
        value={charData.speed}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>
  </div>

  <div className="flex flex-wrap mb-4">

    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
      <label className="block text-center mx-5 font-dragon underline">Max HP</label>
      <input
        type="number"
        name="health.max_hp"
        value={charData.max_hp}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>


    <div className="w-full sm:w-1/3 mb-4 sm:mb-4">
      <label className="block text-center font-dragon underline">Current HP</label>
      <input
        type="number"
        name="health.current_hp"
        value={charData.current_hp}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>

    
    <div className="w-full sm:w-1/3">
      <label className="block text-center font-dragon underline">Temporary HP</label>
      <input
        type="number"
        name="health.temp_hp"
        value={charData.temp_hp}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>
  </div>

  <div className="flex flex-wrap my-4">

    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
      <label className="block text-center font-dragon underline">Hit Dice Total</label>
      <input
        type="number"
        name="health.hit_total"
        value={charData.hit_total}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>


    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
      <label className="block text-center font-dragon underline">Hit Dice</label>
      <input
        type="number"
        name="health.hit_dice"
        value={charData.hit_dice}
        onChange={handleChange}
        required
        className="text-xl bg-transparent rounded p-1 w-full text-center"
      />
    </div>
  </div>
</form>

  );
}

export default CreateHealth;
