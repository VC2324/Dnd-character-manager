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
            <label className="block mb-1 font-bold text-gray-700">Personality Traits:</label>
            <textarea
                name="personality_traits"
                value={personal.personality_traits}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-bold text-gray-700">Ideals:</label>
            <textarea
                name="ideals"
                value={personal.ideals}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-bold text-gray-700">Bonds:</label>
            <textarea
                name="bonds"
                value={personal.bonds}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
            />
        </div>
        <div>
            <label className="block mb-1 font-bold text-gray-700">Flaws:</label>
            <textarea
                name="flaws"
                value={personal.flaws}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
            />
        </div>
    </form>
</div>

)
}

export default CharacterPersonal