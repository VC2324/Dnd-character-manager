import React from 'react';

function CharacterMisc({ handleSubmit, profData, handleChange }) {
  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="ml-4">
        <div>
          <div className="flex flex-col gap-2"> {/* Flex container for stacked layout */}
            {/* Inspiration */}
            <div className="flex items-center">
              <input
                type="number"
                name="inspiration"
                value={profData.misc_stats.inspiration}
                onChange={handleChange}
                // className="w-16 p-2 rounded shadow-sm outline-none text-center"
                className="w-16 p-2 rounded-full border-2 border-black outline-none text-center"
                required
              />
              {/* <label className="ml-2">Inspiration</label> */}
              {/* <label className="ml-2 border border-black p-1 rounded">Inspiration</label> */}
              <label className=" ml-2 p-2 border-2 border-black rounded font-dragon  outline-double ">Inspiration</label>
            </div>

            {/* Proficiency Bonus */}
            <div className="flex items-center">
              <input
                type="number"
                name="prof_bonus"
                value={profData.misc_stats.prof_bonus}
                onChange={handleChange}
                // className="w-16 p-2 rounded shadow-sm outline-none text-center"
                className="w-16 p-2 rounded-full border-2 border-black outline-none text-center"
                required
              />
              <label className="ml-2 p-2 border-2 border-black rounded font-dragon  outline-double">Proficiency Bonus</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CharacterMisc;
