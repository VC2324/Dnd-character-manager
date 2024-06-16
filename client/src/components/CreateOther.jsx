import React from "react";

function CreateOther({ handleSubmit, handleChange, charData }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Other Proficiencies:
            <textarea
              name="other.other_prof"
              value={charData.other_prof}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Languages:
            <textarea
              name="other.languages"
              value={charData.languages}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
}
export default CreateOther;