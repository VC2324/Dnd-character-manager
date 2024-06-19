function CharacterOther({handleChange, handleSubmit, other}){
    return(
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Other Proficiencies:</label>
            <textarea
                name="other_prof"
                value={other.other_prof}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm text-center "
                required
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Languages:</label>
            <textarea
                name="languages"
                value={other.languages}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm text-center "
                required
            />
        </div>
    </form>
</div>

    )
}
export default CharacterOther