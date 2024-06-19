import React from "react";

function CreatePersonal({ handleSubmit, handleChange, charData }) {
  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>
    //       Personality Traits:
    //       <textarea
    //         name="personal.personality_traits"
    //         value={charData.personality_traits}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Ideals:
    //       <textarea
    //         name="personal.ideals"
    //         value={charData.ideals}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Bonds:
    //       <textarea
    //         name="personal.bonds"
    //         value={charData.bonds}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Flaws:
    //       <textarea
    //         name="personal.flaws"
    //         value={charData.flaws}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>
    //   </div>

    // </form>
    <form onSubmit={handleSubmit}>
  {/* Personality Traits */}
  <div className="p-2">
    <label className="block mb-1 font-dragon text-black-700 underline text-xl">Personality Traits:</label>
    <textarea
      name="personal.personality_traits"
      value={charData.personal.personality_traits}
      onChange={handleChange}
      className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"
      rows="9"
      required
    />
  </div>

  {/* Ideals */}
  <div className="p-2">
    <label className="block mb-1 font-dragon text-black-700 underline text-xl">Ideals:</label>
    <textarea
      name="personal.ideals"
      value={charData.personal.ideals}
      onChange={handleChange}
      className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"
      rows="9"
      required
    />
  </div>

  {/* Bonds */}
  <div className="p-2">
    <label className="block mb-1 font-dragon text-black-700 underline text-xl">Bonds:</label>
    <textarea
      name="personal.bonds"
      value={charData.personal.bonds}
      onChange={handleChange}
      className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"
      rows="7"
      required
    />
  </div>

  {/* Flaws */}
  <div className="p-2">
    <label className="block mb-1 font-dragon text-black-700 underline text-xl">Flaws:</label>
    <textarea
      name="personal.flaws"
      value={charData.personal.flaws}
      onChange={handleChange}
      className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"
      rows="7"
      required
    />
  </div>
</form>

  );
}

export default CreatePersonal;