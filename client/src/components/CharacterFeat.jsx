function CharacterFeat({handleChange, feats, handleSubmit}){
    return(
        <div>
                 <form onSubmit={handleSubmit}>
        <div>
            <label>Features:</label>
            <textarea name="features" value={feats.features} onChange={handleChange} />
        </div>
        <div>
            <label>Traits:</label>
            <textarea name="traits" value={feats.traits} onChange={handleChange} />
        </div>
        </form>
        </div>
    )

}

export default CharacterFeat