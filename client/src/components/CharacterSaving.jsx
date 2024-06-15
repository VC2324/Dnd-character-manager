// // import React from 'react';

// // function SavingThrows({ handleSubmit, savingThrows, handleChange }) {
// //     return (
// //         <div>
// //             <h2>Saving Throws</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>
// //                         Strength:
// //                         <input
// //                             type="number"
// //                             name="strength"
// //                             value={savingThrows.strength}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="strength_pro"
// //                             checked={savingThrows.strength_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <label>
// //                         Dexterity:
// //                         <input
// //                             type="number"
// //                             name="dexterity"
// //                             value={savingThrows.dexterity}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="dexterity_pro"
// //                             checked={savingThrows.dexterity_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <label>
// //                         Constitution:
// //                         <input
// //                             type="number"
// //                             name="constitution"
// //                             value={savingThrows.constitution}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="constitution_pro"
// //                             checked={savingThrows.constitution_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <label>
// //                         Intelligence:
// //                         <input
// //                             type="number"
// //                             name="intelligence"
// //                             value={savingThrows.intelligence}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="intelligence_pro"
// //                             checked={savingThrows.intelligence_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <label>
// //                         Wisdom:
// //                         <input
// //                             type="number"
// //                             name="wisdom"
// //                             value={savingThrows.wisdom}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="wisdom_pro"
// //                             checked={savingThrows.wisdom_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <label>
// //                         Charisma:
// //                         <input
// //                             type="number"
// //                             name="charisma"
// //                             value={savingThrows.charisma}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             name="charisma_pro"
// //                             checked={savingThrows.charisma_pro}
// //                             onChange={handleChange}
// //                         />
// //                         Proficient
// //                     </label>
// //                 </div>
// //                 <div>
// //                     <button type="submit">Save</button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // }

// // export default SavingThrows
// import React from 'react';

// function CharacterSaving({ handleSubmit, savingThrows, handleChange }) {
//     return (
//         <div>
//             <h2>Saving Throws</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>
//                         Strength:
//                         <input
//                             type="number"
//                             name="strength"
//                             value={profcharsavingThrows.strength}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="strength_pro"
//                             checked={savingThrows.strength_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Dexterity:
//                         <input
//                             type="number"
//                             name="dexterity"
//                             value={savingThrows.dexterity}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="dexterity_pro"
//                             checked={savingThrows.dexterity_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Constitution:
//                         <input
//                             type="number"
//                             name="constitution"
//                             value={savingThrows.constitution}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="constitution_pro"
//                             checked={savingThrows.constitution_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Intelligence:
//                         <input
//                             type="number"
//                             name="intelligence"
//                             value={savingThrows.intelligence}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="intelligence_pro"
//                             checked={savingThrows.intelligence_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Wisdom:
//                         <input
//                             type="number"
//                             name="wisdom"
//                             value={savingThrows.wisdom}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="wisdom_pro"
//                             checked={savingThrows.wisdom_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Charisma:
//                         <input
//                             type="number"
//                             name="charisma"
//                             value={savingThrows.charisma}
//                             onChange={handleChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="charisma_pro"
//                             checked={savingThrows.charisma_pro}
//                             onChange={handleChange}
//                         />
//                         Proficient
//                     </label>
//                 </div>
//                 <div>
//                     <button type="submit">Save</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default CharacterSaving;
import React from 'react';

function CharacterSaving({ handleSubmit, savingThrows, handleChange }) {
    return (
        <div>
            <h2>Saving Throws</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Strength:
                        <input
                            type="number"
                            name="saving_throws.strength"
                            value={savingThrows.strength}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.strength_pro"
                            checked={savingThrows.strength_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                <div>
                    <label>
                        Dexterity:
                        <input
                            type="number"
                            name="saving_throws.dexterity"
                            value={savingThrows.dexterity}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.dexterity_pro"
                            checked={savingThrows.dexterity_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                <div>
                    <label>
                        Constitution:
                        <input
                            type="number"
                            name="saving_throws.constitution"
                            value={savingThrows.constitution}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.constitution_pro"
                            checked={savingThrows.constitution_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                <div>
                    <label>
                        Intelligence:
                        <input
                            type="number"
                            name="saving_throws.intelligence"
                            value={savingThrows.intelligence}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.intelligence_pro"
                            checked={savingThrows.intelligence_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                <div>
                    <label>
                        Wisdom:
                        <input
                            type="number"
                            name="saving_throws.wisdom"
                            value={savingThrows.wisdom}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.wisdom_pro"
                            checked={savingThrows.wisdom_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                <div>
                    <label>
                        Charisma:
                        <input
                            type="number"
                            name="saving_throws.charisma"
                            value={savingThrows.charisma}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="saving_throws.charisma_pro"
                            checked={savingThrows.charisma_pro}
                            onChange={handleChange}
                        />
                        Proficient
                    </label>
                </div>
                
            </form>
        </div>
    );
}

export default CharacterSaving;

