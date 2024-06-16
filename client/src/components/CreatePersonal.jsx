import React from "react";

function CreatePersonal({ handleSubmit, handleChange, charData }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Personality Traits:
          <textarea
            name="personality_traits"
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
            name="ideals"
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
            name="bonds"
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
            name="flaws"
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