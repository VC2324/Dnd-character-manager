function CharacterPersonal({handleChange, personal, handleSubmit}){
    return(
    <div className="p-2">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Personality Traits</label>
            <textarea
                name="personality_traits"
                value={personal.personality_traits}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"
                rows="9"
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Ideals</label>
            <textarea
                name="ideals"
                value={personal.ideals}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg shadow-sm"
                className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"

                rows="9"

            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Bonds</label>
            <textarea
                name="bonds"
                value={personal.bonds}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg shadow-sm"
                className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"

                rows="7"

            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Flaws</label>
            <textarea
                name="flaws"
                value={personal.flaws}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg shadow-sm "
                className="w-full p-2 border rounded-lg shadow-sm bg-transparent border-black"

                rows="7"

            />
        </div>
    </form>
</div>

)
}

export default CharacterPersonal