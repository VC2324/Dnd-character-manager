import React from 'react';

function CharacterProfile({ handleSubmit, handleChange, profData }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                    <label className="block mb-1 font-dragon underline text-2xl">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profData.name}
                        onChange={handleChange}
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-2xl">Class:</label>
                    <input
                        type="text"
                        name="klass"
                        value={profData.klass}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 font-dragon underline text-2xl">Level:</label>
                    <input
                        type="number"
                        name="level"
                        value={profData.level}
                        onChange={handleChange}
                        // className="block w-full border-b  border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-2xl">Background:</label>
                    <input
                        type="text"
                        name="background"
                        value={profData.background}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 font-dragon underline text-2xl">Race:</label>
                    <input
                        type="text"
                        name="race"
                        value={profData.race}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-2xl" >XP:</label>
                    <input
                        type="number"
                        name="xp"
                        value={profData.xp}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-2xl">Alignment:</label>
                    <input
                        type="text"
                        name="alignment"
                        value={profData.alignment}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400outline-none shadow-lg"
                        className="block w-full bg-transparent border-b border-black outline-none shadow-lg text-xl"

                        required
                    />
                </div>
            <button
                    className="text-gray-900 bg-gradient-to-r from-brown-200 via-brown-300 to-brown-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-brown-100 dark:focus:ring-brown-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Update Character
                    </button>
                    
            </div>
        </form>
    );
}

export default CharacterProfile;
