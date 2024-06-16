import React from "react";

function CreateStats({ handleChange, charData }) {
    return (
        <div>
            <h2>Character Stats</h2>
            <form>
                <div>
                    <label>Strength:
                        <input type="number" name="stats.strength" value={charData.stats.strength} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Strength Modifier:
                        <input type="number" name="stats.strength_mod" value={charData.stats.strength_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Dexterity:
                        <input type="number" name="stats.dexterity" value={charData.stats.dexterity} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Dexterity Modifier:
                        <input type="number" name="stats.dexterity_mod" value={charData.stats.dexterity_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Constitution:
                        <input type="number" name="stats.constitution" value={charData.stats.constitution} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Constitution Modifier:
                        <input type="number" name="stats.constitution_mod" value={charData.stats.constitution_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Intelligence:
                        <input type="number" name="stats.intelligence" value={charData.stats.intelligence} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Intelligence Modifier:
                        <input type="number" name="stats.intelligence_mod" value={charData.stats.intelligence_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Wisdom:
                        <input type="number" name="stats.wisdom" value={charData.stats.wisdom} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Wisdom Modifier:
                        <input type="number" name="stats.wisdom_mod" value={charData.stats.wisdom_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Charisma:
                        <input type="number" name="stats.charisma" value={charData.stats.charisma} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Charisma Modifier:
                        <input type="number" name="stats.charisma_mod" value={charData.stats.charisma_mod} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Perception:
                        <input type="number" name="stats.wis_perception" value={charData.stats.wis_perception} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Perception Modifier:
                        <input type="number" name="stats.wis_perception_mod" value={charData.stats.wis_perception_mod} onChange={handleChange} required />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default CreateStats;

