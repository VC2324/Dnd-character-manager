import React from "react";

function CreateMiscStats({ handleChange, charData }) {
    return (
        <div>
            <h2>Miscellaneous Stats</h2>
            <form>
                <div>
                    <label>Inspiration:
                        <input type="number" name="misc_stats.inspiration" value={charData.misc_stats.inspiration} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Proficiency Bonus:
                        <input type="number" name="misc_stats.prof_bonus" value={charData.misc_stats.prof_bonus} onChange={handleChange} required />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default CreateMiscStats;
