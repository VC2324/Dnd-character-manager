function CharacterFeat({handleChange, feats, handleSubmit}){
    return(
        // <div>
        //          <form onSubmit={handleSubmit}>
        // <div>
        //     <label>Features:</label>
        //     <textarea name="features" value={feats.features} onChange={handleChange} />
        // </div>
        // <div>
        //     <label>Traits:</label>
        //     <textarea name="traits" value={feats.traits} onChange={handleChange} />
        // </div>
        // </form>
        // </div>
        <div className="p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Features:</label>
            <textarea
                name="features"
                value={feats.features}
                onChange={handleChange}
                className=" p-2 border rounded-lg shadow-sm text-center "
                rows="6"

            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-black-700 underline">Traits:</label>
            <textarea
                name="traits"
                value={feats.traits}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm " 
                rows="6"
                
            />
        </div>
    </form>
</div>

    )

}

export default CharacterFeat