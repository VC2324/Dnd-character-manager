import React from "react";

function CreateOther({ handleSubmit, handleChange, charData }) {
  return (

    <div className="p-2">
  <form onSubmit={handleSubmit} className="space-y-4">

    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Other Proficiencies:</label>
      <textarea
        name="other.other_prof"
        value={charData.other.other_prof}
        onChange={handleChange}
        className="p-2 border bg-transparent border-black rounded-lg shadow-sm text-center"
        rows="4"
        required
      />
    </div>


    <div>
      <label className="block mb-1 font-dragon text-xl text-black-700 underline">Languages:</label>
      <textarea
        name="other.languages"
        value={charData.other.languages}
        onChange={handleChange}
        className="p-2 border bg-transparent border-black rounded-lg shadow-sm text-center"
        rows="4"
        required
      />
    </div>
  </form>
</div>

  );
}
export default CreateOther;