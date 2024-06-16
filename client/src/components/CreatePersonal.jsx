import React from "react";

function CreatePersonal({ handleSubmit, handleChange, charData }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Personality Traits:
          <textarea
            name="personal.personality_traits"
            value={charData.personality_traits}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Ideals:
          <textarea
            name="personal.ideals"
            value={charData.ideals}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Bonds:
          <textarea
            name="personal.bonds"
            value={charData.bonds}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Flaws:
          <textarea
            name="personal.flaws"
            value={charData.flaws}
            onChange={handleChange}
            required
          />
        </label>
      </div>

    </form>
  );
}

export default CreatePersonal;