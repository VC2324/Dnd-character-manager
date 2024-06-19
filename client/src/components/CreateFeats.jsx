import React from "react";

function CreateFeats({ handleSubmit, handleChange, charData }) {
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>
    //         Features:
    //         <textarea
    //           name="feats.features"
    //           value={charData.features}
    //           onChange={handleChange}
    //           required
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Traits:
    //         <textarea
    //           name="feats.traits"
    //           value={charData.traits}
    //           onChange={handleChange}
    //           required
    //         />
    //       </label>
    //     </div>
    //   </form>
    // </div>
    <div className="p-2">
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Features */}
    <div>
      <label className="block mb-1 font-dragon text-black-700 underline text-xl">Features:</label>
      <textarea
        name="feats.features"
        value={charData.feats.features}
        onChange={handleChange}
        className="p-2 border rounded-lg shadow-sm text-center bg-transparent border-black"
        rows="6"
        required
      />
    </div>

    {/* Traits */}
    <div>
      <label className="block mb-1 font-dragon text-black-700 underline text-xl">Traits:</label>
      <textarea
        name="feats.traits"
        value={charData.feats.traits}
        onChange={handleChange}
        className="p-2 border rounded-lg shadow-sm text-center bg-transparent border-black"
        rows="6"
        required
      />
    </div>
  </form>
</div>

  );
}

export default CreateFeats;