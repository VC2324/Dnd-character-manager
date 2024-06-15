function CharacterAttack({handleChange, attacks, handleSubmit}){
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={attacks.name} onChange={handleChange} />
            </div>
            <div>
                <label>Attack Bonus:</label>
                <input type="number" name="attack_bonus" value={attacks.attack_bonus} onChange={handleChange} />
            </div>
            <div>
                <label>Damage:</label>
                <input type="number" name="dmg" value={attacks.dmg} onChange={handleChange} />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" name="tipe" value={attacks.tipe} onChange={handleChange} />
            </div>
            </form>
        </div>
    );
}


export default CharacterAttack