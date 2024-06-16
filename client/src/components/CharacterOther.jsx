function CharacterOther({handleChange, handleSubmit, other}){
    return(
        <div>
                 <form onSubmit={handleSubmit}>
        <div>
            <label> Other Proficiencies:</label>
            <textarea name="other_prof" value={other.other_prof} onChange={handleChange} />
        </div>
        <div>
            <label>Languages:</label>
            <textarea name="languages" value={other.languages} onChange={handleChange} />
        </div>
        </form>
        </div>
    )
}
export default CharacterOther