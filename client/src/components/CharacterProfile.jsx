import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function CharacterProfile({character, handleSubmit, handleChange, profData, setProfData} ){

    // console.log(character)

//     const [profData, setProfData] = useState({
//         name: "",
//         klass: "",
//         level: "",
//         background: "",
//         race: "",
//         xp: "",
//         alignment: ""
//       });
 


// useEffect(() => {
//     if (character) {
//         setProfData({
//             name: character.name,
//             klass: character.klass,
//             level: character.level,
//             background: character.background,
//             race: character.race,
//             xp: character.xp,
//             alignment: character.alignment
//         });
//     }
// }, [character]);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfData({
//         ...profData,
//         [name]: value
        
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
// // nned to add some of  the submission logic here
//     console.log("Form Submitted:", profData);
// };

return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:<input
            type="text"
            name="name"
            value={profData.name}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>Class:<input
            type="text"
            name="klass"
            value={profData.klass}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>Level:<input
            type="number"
            name="level"
            value={profData.level}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>Background:<input
            type="text"
            name="background"
            value={profData.background}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>Race:<input
            type="text"
            name="race"
            value={profData.race}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>XP:<input
            type="number"
            name="xp"
            value={profData.xp}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div>
        <label>Alignment:<input
            type="text"
            name="alignment"
            value={profData.alignment}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      {/* <button type="submit">Update Character</button> */}
    </form>
  );
}

export default CharacterProfile