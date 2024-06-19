import React from "react";

function CreateProfile({ handleChange, handleSubmit, charData }) {
    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-transparent rounded-lg ">
    <div className="col-span-1">

        <label className="block mb-1 font-dragon underline text-2xl">Name:</label>
        <input
            type="text"
            name="name"
            value={charData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b  border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 underline font-dragon text-2xl">Class:</label>
        <input
            type="text"
            name="klass"
            value={charData.klass}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 font-dragon underline text-2xl">Level:</label>
        <input
            type="number"
            name="level"
            value={charData.level}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 underline font-dragon text-2xl">Background:</label>
        <input
            type="text"
            name="background"
            value={charData.background}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 font-dragon underline text-2xl">Race:</label>
        <input
            type="text"
            name="race"
            value={charData.race}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 underline font-dragon text-2xl">XP:</label>
        <input
            type="number"
            name="xp"
            value={charData.xp}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
    <div className="col-span-1">
        <label className="block mb-1 font-dragon underline text-2xl">Alignment:</label>
        <input
            type="text"
            name="alignment"
            value={charData.alignment}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
        />
    </div>
<button  className=" text-gray-900 bg-gradient-to-r from-brown-200 via-brown-300 to-brown-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-brown-100 dark:focus:ring-brown-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" onClick={handleSubmit}>Create Character</button>
</form>

    );
}

export default CreateProfile;

  