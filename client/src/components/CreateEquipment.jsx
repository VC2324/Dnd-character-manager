import React from "react";

function CreateEquipment({ handleChange, charData }) {
  return (
    <div>
      <form>
        <div>
          <label>
            Equipment:
            <input
              type="text"
              name="equipments.equipment"
              value={charData.equipment}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Equipment Stat:
            <input
              type="text"
              name="equipments.equipment_stat"
              value={charData.equipment_stat}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreateEquipment;
