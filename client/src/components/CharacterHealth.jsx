function CharacterHealth({handleSubmit, health, handleChange} ){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Armor Class:<input type="number" name="armor_class" value={health.armor_class} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Initiative:<input type="number" name="initiative" value={health.initiative} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Speed:<input type="number" name="speed" value={health.speed} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Max HP:<input type="number" name="max_hp" value={health.max_hp} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Current HP:<input type="number" name="current_hp" value={health.current_hp} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Temporary HP:<input type="number" name="temp_hp" value={health.temp_hp} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Hit Dice Total:<input type="number" name="hit_total" value={health.hit_total} onChange={handleChange} required /></label>
                </div>
                <div>
                    <label>Hit Dice:<input type="number" name="hit_dice" value={health.hit_dice} onChange={handleChange} required /></label>
                </div>

            </form>
        </div>
    )
    
}

export default CharacterHealth