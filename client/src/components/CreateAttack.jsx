
import React from "react";

function CreateAttack({ handleChange, charData }) {
  return (
  
    <div className="p-4">
  <form className="space-y-4">

    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Attack Name:</label>
      <input
        type="text"
        name="attacks.name"
        value={charData.attacks.name}
        onChange={handleChange}
        className="p-2 border border-black rounded-lg shadow-sm bg-transparent text-center"
        required
      />
    </div>


    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Attack Bonus:</label>
      <input
        type="number"
        name="attacks.attack_bonus"
        value={charData.attacks.attack_bonus}
        onChange={handleChange}
        className="p-2 border border-black rounded-lg shadow-sm bg-transparent text-center"
        required
      />
    </div>



    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Damage:</label>
      <input
        type="number"
        name="attacks.dmg"
        value={charData.attacks.dmg}
        onChange={handleChange}
        className="p-2 border border-black rounded-lg shadow-sm bg-transparent text-center"
        required
      />
    </div>



    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Type:</label>
      <input
        type="text"
        name="attacks.tipe"
        value={charData.attacks.tipe}
        onChange={handleChange}
        className="p-2 border border-black rounded-lg shadow-sm bg-transparent text-center"
        required
      />
    </div>
  </form>
</div>

  );
}

export default CreateAttack;

