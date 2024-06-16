import React from "react";

function CreateProfile({ handleChange, charData }) {
    return (
        <form>
            <div>
                <label>Name:<input type="text" name="name" value={charData.name} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Class:<input type="text" name="klass" value={charData.klass} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Level:<input type="number" name="level" value={charData.level} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Background:<input type="text" name="background" value={charData.background} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Race:<input type="text" name="race" value={charData.race} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>XP:<input type="number" name="xp" value={charData.xp} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Alignment:<input type="text" name="alignment" value={charData.alignment} onChange={handleChange} required /></label>
            </div>
        </form>
    );
}

export default CreateProfile;

  