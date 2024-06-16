import React from "react";

function CreateFeats({ handleSubmit, handleChange, charData }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Features:
            <textarea
              name="feats.features"
              value={charData.features}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Traits:
            <textarea
              name="feats.traits"
              value={charData.traits}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreateFeats;