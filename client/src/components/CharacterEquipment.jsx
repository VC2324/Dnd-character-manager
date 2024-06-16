import React from "react";

function CharacterEquipment({ handleChange, equipments, handleSubmit }){
    // console.log(equipments)
    return (
        <div>
            <div>
                <label>Equipment:</label>
                <input type="text" name="equipment" value={equipments.equipment} onChange={handleChange} />
            <div>
                <label>Equipment Stat:</label>
                <input type="number" name="equipment_stat" value={equipments.equipment_stat} onChange={handleChange} />
            </div>
            </div>
        </div>
    );
}
export default CharacterEquipment