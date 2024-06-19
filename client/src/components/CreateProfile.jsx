import React from "react";

function CreateProfile({ handleChange, charData }) {
    return (
        // <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Name:</label>
        //         <input 
        //             type="text" 
        //             name="name" 
        //             value={charData.name} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Class:</label>
        //         <input 
        //             type="text" 
        //             name="klass" 
        //             value={charData.klass} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Level:</label>
        //         <input 
        //             type="number" 
        //             name="level" 
        //             value={charData.level} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Background:</label>
        //         <input 
        //             type="text" 
        //             name="background" 
        //             value={charData.background} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Race:</label>
        //         <input 
        //             type="text" 
        //             name="race" 
        //             value={charData.race} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">XP:</label>
        //         <input 
        //             type="number" 
        //             name="xp" 
        //             value={charData.xp} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //     <div>
        //         <label className="block text-gray-700 font-bold mb-2">Alignment:</label>
        //         <input 
        //             type="text" 
        //             name="alignment" 
        //             value={charData.alignment} 
        //             onChange={handleChange} 
        //             required 
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        // </form>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-transparent rounded-lg shadow-md">
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
</form>

    );
}

export default CreateProfile;

  