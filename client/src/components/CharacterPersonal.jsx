function CharacterPersonal({handleChange, personal, handleSubmit}){
    return(
    // <div>
    //      <form onSubmit={handleSubmit}>
    //     <div>
    //         <label>Personality Traits:</label>
    //         <textarea name="personality_traits" value={personal.personality_traits} onChange={handleChange} />
    //     </div>
    //     <div>
    //         <label>Ideals:</label>
    //         <textarea name="ideals" value={personal.ideals} onChange={handleChange} />
    //     </div>
    //     <div>
    //         <label>Bonds:</label>
    //         <textarea name="bonds" value={personal.bonds} onChange={handleChange} />
    //     </div>
    //     <div>
    //         <label>Flaws:</label>
    //         <textarea name="flaws" value={personal.flaws} onChange={handleChange} />
    //     </div>
    //     </form>
    // </div>
    <div className="p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Personality Traits</label>
            <textarea
                name="personality_traits"
                value={personal.personality_traits}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm "
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Ideals</label>
            <textarea
                name="ideals"
                value={personal.ideals}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm "
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Bonds</label>
            <textarea
                name="bonds"
                value={personal.bonds}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm"
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Flaws</label>
            <textarea
                name="flaws"
                value={personal.flaws}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm "
                rows="3"
            />
        </div>
    </form>
</div>

)
}

export default CharacterPersonal