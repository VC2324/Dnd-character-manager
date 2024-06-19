import React from "react";

function CreateEquipment({ handleChange, charData }) {
  return (
    <div className="p-1">
  <form>
    <div className="space-y-4">

      <div>
        <label className="block mb-1 font-dragon text-xl text-black-700 underline">Equipment:</label>
        <input
          type="text"
          name="equipments.equipment"
          value={charData.equipments.equipment}
          onChange={handleChange}
          className="w-full p-2 border border-black rounded-lg shadow-sm text-center bg-transparent"
          required
        />
      </div>


      <div>
        <label className="block mb-1 font-dragon text-xl text-black-700 underline">Equipment Stat:</label>
        <input
          type="number"
          name="equipments.equipment_stat"
          value={charData.equipments.equipment_stat}
          onChange={handleChange}
          className="w-full p-2 border border-black bg-transparent rounded-lg shadow-sm text-center"
          required
        />
      </div>
    </div>
  </form>
</div>

  );
}

export default CreateEquipment;
