

import React from 'react';

function CharacterMisc({ handleSubmit, profData, handleChange }) {
console.log(profData)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Inspiration:
            <input
              type="number"
              name="inspiration"
              value={profData.misc_stats.inspiration}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Proficiency Bonus:
            <input
              type="number"
              name="prof_bonus"
              value={profData.misc_stats.prof_bonus}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CharacterMisc;