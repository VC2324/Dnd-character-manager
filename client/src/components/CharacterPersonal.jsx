function CharacterPersonal({handleChange, personal, handleSubmit}){
    return(
    <div>
        <div>
            <label>Personality Traits:</label>
            <textarea name="personality_traits" value={personal.personality_traits} onChange={handleChange} />
        </div>
        <div>
            <label>Ideals:</label>
            <textarea name="ideals" value={personal.ideals} onChange={handleChange} />
        </div>
        <div>
            <label>Bonds:</label>
            <textarea name="bonds" value={personal.bonds} onChange={handleChange} />
        </div>
        <div>
            <label>Flaws:</label>
            <textarea name="flaws" value={personal.flaws} onChange={handleChange} />
        </div>
    </div>
)
}

export default CharacterPersonal