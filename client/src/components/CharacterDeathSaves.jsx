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

        // <div>
        //     <h2 className=" font-dragon text-xl underline ">Death Saves</h2>
        //     <div>
        //         <label>
        //             Successes:
        //             <input
        //                 type="checkbox"
        //                 checked={successes >= 1}
        //                 onChange={(e) => handleSuccessChange(0, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-green-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

        //             />
        //             <input
        //                 type="checkbox"
        //                 checked={successes >= 2}
        //                 onChange={(e) => handleSuccessChange(1, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-green-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

        //             />
        //             <input
        //                 type="checkbox"
        //                 checked={successes >= 3}
        //                 onChange={(e) => handleSuccessChange(2, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-green-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

                        
        //             />
        //         </label>
        //     </div>
        //     <div>
        //         <label>
        //             Failures:
        //             <input
        //                 type="checkbox"
        //                 checked={failures >= 1}
        //                 onChange={(e) => handleFailureChange(0, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

        //             />
        //             <input
        //                 type="checkbox"
        //                 checked={failures >= 2}
        //                 onChange={(e) => handleFailureChange(1, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

        //             />
        //             <input
        //                 type="checkbox"
        //                 checked={failures >= 3}
        //                 onChange={(e) => handleFailureChange(2, e.target.checked)}
        //                 className="h-4 w-4 appearance-none rounded-full border-2 border-black checked:bg-red-400 checked:border-black focus:ring-5 focus:outline-none transition-all duration-300"

        //             />
        //         </label>
        //     </div>

        // </div>

        <div className="p-4 border rounded">
    <h2 className="font-dragon text-xl underline mb-4">Death Saves</h2>
    <div className="mb-2">
        <label className="mb-1 block">Successes:</label>
        <div className="flex space-x-2">
            <input
                type="checkbox"
                checked={successes >= 1}
                onChange={(e) => handleSuccessChange(0, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-greenranger checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
            <input
                type="checkbox"
                checked={successes >= 2}
                onChange={(e) => handleSuccessChange(1, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-greenranger checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
            <input
                type="checkbox"
                checked={successes >= 3}
                onChange={(e) => handleSuccessChange(2, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-greenranger checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
        </div>
    </div>
    <div>
        <label className="mb-1 block">Failures:</label>
        <div className="flex space-x-2">
            <input
                type="checkbox"
                checked={failures >= 1}
                onChange={(e) => handleFailureChange(0, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-bloodsorcerer checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
            <input
                type="checkbox"
                checked={failures >= 2}
                onChange={(e) => handleFailureChange(1, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-bloodsorcerer checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
            <input
                type="checkbox"
                checked={failures >= 3}
                onChange={(e) => handleFailureChange(2, e.target.checked)}
                className="h-6 w-6 appearance-none rounded-full border-2 border-black checked:bg-bloodsorcerer checked:border-black focus:ring-2 focus:outline-none transition-all duration-300"
            />
        </div>
    </div>
</div>
    );
}

export default CharacterDeathSaves;