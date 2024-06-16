import React from "react";

function CreateHealth({ handleSubmit, handleChange, charData }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Armor Class:
          <input
            type="number"
            name="health.armor_class"
            value={charData.armor_class}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Initiative:
          <input
            type="number"
            name="health.initiative"
            value={charData.initiative}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Speed:
          <input
            type="number"
            name="health.speed"
            value={charData.speed}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Max HP:
          <input
            type="number"
            name="health.max_hp"
            value={charData.max_hp}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Current HP:
          <input
            type="number"
            name="health.current_hp"
            value={charData.current_hp}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Temporary HP:
          <input
            type="number"
            name="health.temp_hp"
            value={charData.temp_hp}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Hit Dice Total:
          <input
            type="number"
            name="health.hit_total"
            value={charData.hit_total}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Hit Dice:
          <input
            type="number"
            name="health.hit_dice"
            value={charData.hit_dice}
            onChange={handleChange}
            required
          />
        </label>
      </div>


    </form>
  );
}

export default CreateHealth;
