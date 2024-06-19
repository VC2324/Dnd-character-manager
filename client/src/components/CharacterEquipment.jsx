import React from "react";

function CharacterEquipment({ handleChange, equipments, handleSubmit }){
    // console.log(equipments)
    return (
        <div className="p-1">
    <div className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Equipment:</label>
            
            <textarea
                type="text"
                name="equipment"
                value={equipments.equipment}
                onChange={handleChange}
                className="w-full p-2 border border-black rounded-lg shadow-sm text-center bg-transparent"
                required
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Equipment Stat:</label>
            <input
                type="number"
                name="equipment_stat"
                value={equipments.equipment_stat}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent rounded-lg shadow-sm text-center "
                required
            />
        </div>
    </div>
</div>

    );
}
export default CharacterEquipment