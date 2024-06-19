function CharacterFeat({handleChange, feats, handleSubmit}){
    return(
        <div className="p-2">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Features:</label>
            <textarea
                name="features"
                value={feats.features}
                onChange={handleChange}
                className=" p-2 border rounded-lg shadow-sm text-center bg-transparent border-black"
                rows="6"

            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline text-xl">Traits:</label>
            <textarea
                name="traits"
                value={feats.traits}
                onChange={handleChange}
                // className="p-2 border rounded-lg shadow-sm " 
                className=" p-2 border rounded-lg shadow-sm text-center bg-transparent border-black"

                rows="6"
                
            />
        </div>
    </form>
</div>

    )

}

export default CharacterFeat