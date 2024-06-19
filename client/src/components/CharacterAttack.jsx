function CharacterAttack({handleChange, attacks, handleSubmit}){
    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //     <div>
        //         <label>Name:</label>
        //         <input type="text" name="name" value={attacks.name} onChange={handleChange} />
        //     </div>
        //     <div>
        //         <label>Attack Bonus:</label>
        //         <input type="number" name="attack_bonus" value={attacks.attack_bonus} onChange={handleChange} />
        //     </div>
        //     <div>
        //         <label>Damage:</label>
        //         <input type="number" name="dmg" value={attacks.dmg} onChange={handleChange} />
        //     </div>
        //     <div>
        //         <label>Type:</label>
        //         <input type="text" name="tipe" value={attacks.tipe} onChange={handleChange} />
        //     </div>
        //     </form>
        // </div>
        <div className="p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Attack Name:</label>
            <input
                type="text"
                name="name"
                value={attacks.name}
                onChange={handleChange}
                className=" p-2 border rounded-lg shadow-sm  text-center"
                required
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Attack Bonus:</label>
            <input
                type="number"
                name="attack_bonus"
                value={attacks.attack_bonus}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm text-center"
                required
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon  text-xl text-black-700 underline">Damage:</label>
            <input
                type="number"
                name="dmg"
                value={attacks.dmg}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm text-center "
                required
            />
        </div>
        <div>
            <label className="block mb-1 font-dragon text-xl text-black-700 underline">Type:</label>
            <input
                type="text"
                name="tipe"
                value={attacks.tipe}
                onChange={handleChange}
                className="p-2 border rounded-lg shadow-sm  text-center"
                required
            />
        </div>
    </form>
</div>

    );
}


export default CharacterAttack