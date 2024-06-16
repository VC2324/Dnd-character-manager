import React, { useState } from "react";

function CharacterDeathSaves({ handleSubmit }) {
    const [successes, setSuccesses] = useState(0);
    const [failures, setFailures] = useState(0);

    const handleSuccessChange = (index, checked) => {
        if (checked) {
            setSuccesses(prev => prev + 1);
        } else {
            setSuccesses(prev => prev - 1);
        }
    };

    const handleFailureChange = (index, checked) => {
        if (checked) {
            setFailures(prev => prev + 1);
        } else {
            setFailures(prev => prev - 1);
        }
    };

    return (
        <div>
            <h2>Death Saves</h2>
            <div>
                <label>
                    Successes:
                    <input
                        type="checkbox"
                        checked={successes >= 1}
                        onChange={(e) => handleSuccessChange(0, e.target.checked)}
                    />
                    <input
                        type="checkbox"
                        checked={successes >= 2}
                        onChange={(e) => handleSuccessChange(1, e.target.checked)}
                    />
                    <input
                        type="checkbox"
                        checked={successes >= 3}
                        onChange={(e) => handleSuccessChange(2, e.target.checked)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Failures:
                    <input
                        type="checkbox"
                        checked={failures >= 1}
                        onChange={(e) => handleFailureChange(0, e.target.checked)}
                    />
                    <input
                        type="checkbox"
                        checked={failures >= 2}
                        onChange={(e) => handleFailureChange(1, e.target.checked)}
                    />
                    <input
                        type="checkbox"
                        checked={failures >= 3}
                        onChange={(e) => handleFailureChange(2, e.target.checked)}
                    />
                </label>
            </div>
            <button type="submit" onClick={handleSubmit}>Update Death Saves</button>
        </div>
    );
}

export default CharacterDeathSaves;