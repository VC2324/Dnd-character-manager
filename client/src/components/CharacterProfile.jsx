
// function CharacterProfile({handleSubmit, handleChange, profData }) {
//   return (
//       <form onSubmit={handleSubmit}>
//           <div>
//               <label>Name:<input type="text" name="name" value={profData.name} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>Class:<input type="text" name="klass" value={profData.klass} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>Level:<input type="number" name="level" value={profData.level} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>Background:<input type="text" name="background" value={profData.background} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>Race:<input type="text" name="race" value={profData.race} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>XP:<input type="number" name="xp" value={profData.xp} onChange={handleChange} required /></label>
//           </div>
//           <div>
//               <label>Alignment:<input type="text" name="alignment" value={profData.alignment} onChange={handleChange} required /></label>
//           </div>
//       </form>
//   );
// }

// export default CharacterProfile;

import React from 'react';

function CharacterProfile({ handleSubmit, handleChange, profData }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                    <label className="block mb-1 underline">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profData.name}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">Class:</label>
                    <input
                        type="text"
                        name="klass"
                        value={profData.klass}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">Level:</label>
                    <input
                        type="number"
                        name="level"
                        value={profData.level}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">Background:</label>
                    <input
                        type="text"
                        name="background"
                        value={profData.background}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">Race:</label>
                    <input
                        type="text"
                        name="race"
                        value={profData.race}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">XP:</label>
                    <input
                        type="number"
                        name="xp"
                        value={profData.xp}
                        onChange={handleChange}
                        className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 underline">Alignment:</label>
                    <input
                        type="text"
                        name="alignment"
                        value={profData.alignment}
                        onChange={handleChange}
                        // className="block w-full border-b border-gray-400 focus:border-blue-500 outline-none"
                        required
                    />
                </div>
            </div>
        </form>
    );
}

export default CharacterProfile;


