import React from "react";

function CreateMiscStats({ handleChange, charData }) {
    return (
    
    <div className="w-1/4 p-4">
  <form className="ml-4">
    <div className="flex flex-col gap-2">
      

      <div className="flex items-center">
        <input
          type="number"
          name="misc_stats.inspiration"
          value={charData.misc_stats.inspiration}
          onChange={handleChange}
          className="w-16 p-2 bg-transparent rounded-full border-2 border-black outline-none text-center"
          required
        />
        <label className="ml-2 p-2 border-2 border-black rounded font-dragon outline-double">
          Inspiration
        </label>
      </div>


      <div className="flex items-center">
        <input
          type="number"
          name="misc_stats.prof_bonus"
          value={charData.misc_stats.prof_bonus}
          onChange={handleChange}
          className="w-16 p-2 bg-transparent rounded-full border-2 border-black outline-none text-center"
          required
        />
        <label className="ml-2 p-2 border-2 border-black rounded font-dragon outline-double">
          Proficiency Bonus
        </label>
      </div>

    </div>
  </form>
</div>

    );
}

export default CreateMiscStats;
