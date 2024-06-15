
function CharacterStats({character, handleSubmit, handleChange, profData, setProfData,  stats}){
    return(
        <div>
             <div>
                <label>Strength Mod:<input
                    type="number"
                    name="strength_mod"
                    value={stats.strength_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Strength:<input
                        type="number"
                        name="strength"
                        value={stats.strength}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Dexterity Mod:<input
                    type="number"
                    name="dexterity_mod"
                    value={stats.dexterity_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Dexterity:<input
                        type="number"
                        name="dexterity"
                        value={stats.dexterity}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Constitution Mod:<input
                    type="number"
                    name="constitution_mod"
                    value={stats.constitution_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Constitution:<input
                        type="number"
                        name="constitution"
                        value={stats.constitution}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Intelligence Mod:<input
                    type="number"
                    name="intelligence_mod"
                    value={stats.intelligence_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Intelligence:<input
                        type="number"
                        name="intelligence"
                        value={stats.intelligence}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Wisdom Mod:<input
                    type="number"
                    name="wisdom_mod"
                    value={stats.wisdom_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Wisdom:<input
                        type="number"
                        name="wisdom"
                        value={stats.wisdom}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Charisma Mod:<input
                    type="number"
                    name="charisma_mod"
                    value={stats.charisma_mod}
                    onChange={handleChange}
                    required
                />
                </label>
                <div>
                    <label>Charisma:<input
                        type="number"
                        name="charisma"
                        value={stats.charisma}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            </div>
            <div>
                <label>Wisdom Perception:<input
                    type="number"
                    name="wis_perception"
                    value={stats.wis_perception}
                    onChange={handleChange}
                    required
                />
                </label>
            </div>
            <div>
                <label>Wisdom Perception Mod:<input
                    type="number"
                    name="wis_perception_mod"
                    value={stats.wis_perception_mod}
                    onChange={handleChange}
                    required
                />
                </label>
            </div>
            

        </div>
    )
}

export default CharacterStats