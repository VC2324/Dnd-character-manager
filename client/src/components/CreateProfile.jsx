// import React from "react";

// function CreateProfile({ handleChange, charData }) {
//     return (
//         <form>
//             <div>
//                 <label>Name:<input type="text" name="name" value={charData.name} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>Class:<input type="text" name="klass" value={charData.klass} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>Level:<input type="number" name="level" value={charData.level} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>Background:<input type="text" name="background" value={charData.background} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>Race:<input type="text" name="race" value={charData.race} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>XP:<input type="number" name="xp" value={charData.xp} onChange={handleChange} required /></label>
//             </div>
//             <div>
//                 <label>Alignment:<input type="text" name="alignment" value={charData.alignment} onChange={handleChange} required /></label>
//             </div>
//         </form>
//     );
// }

// export default CreateProfile;
import React from "react";

function CreateProfile({ handleChange, charData }) {
    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
            <div>
                <label className="block text-gray-700 font-bold mb-2">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={charData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Class:</label>
                <input 
                    type="text" 
                    name="klass" 
                    value={charData.klass} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Level:</label>
                <input 
                    type="number" 
                    name="level" 
                    value={charData.level} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Background:</label>
                <input 
                    type="text" 
                    name="background" 
                    value={charData.background} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Race:</label>
                <input 
                    type="text" 
                    name="race" 
                    value={charData.race} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">XP:</label>
                <input 
                    type="number" 
                    name="xp" 
                    value={charData.xp} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Alignment:</label>
                <input 
                    type="text" 
                    name="alignment" 
                    value={charData.alignment} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </form>
    );
}

export default CreateProfile;

  