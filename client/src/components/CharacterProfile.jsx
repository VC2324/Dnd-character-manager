import React from 'react';

function CharacterProfile({ handleSubmit, handleChange, profData }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                    <label className="block mb-1  font-dragon underline text-xl">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profData.name}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-xl">Class:</label>
                    <input
                        type="text"
                        name="klass"
                        value={profData.klass}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 font-dragon underline text-xl">Level:</label>
                    <input
                        type="number"
                        name="level"
                        value={profData.level}
                        onChange={handleChange}
                        className="block w-full border-b  border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-xl">Background:</label>
                    <input
                        type="text"
                        name="background"
                        value={profData.background}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 font-dragon underline text-xl">Race:</label>
                    <input
                        type="text"
                        name="race"
                        value={profData.race}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-xl" >XP:</label>
                    <input
                        type="number"
                        name="xp"
                        value={profData.xp}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline font-dragon text-xl">Alignment:</label>
                    <input
                        type="text"
                        name="alignment"
                        value={profData.alignment}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none shadow-lg"
                        required
                    />
                </div>
            </div>
        </form>
    );
}

export default CharacterProfile;
