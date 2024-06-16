// import React from "react";

// function CharacterAttack({ handleSubmit, handleChange, charData }) {
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Attack Name:
//             <input
//               type="text"
//               name="attacks.name"
//               value={charData.attacks.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Attack Bonus:
//             <input
//               type="number"
//               name="attacks.attack_bonus"
//               value={charData.attack_bonus}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Damage:
//             <input
//               type="text"
//               name="attacks.dmg"
//               value={charData.dmg}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Type:
//             <input
//               type="text"
//               name="attacks.tipe"
//               value={charData.tipe}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CharacterAttack;
import React from "react";

function CreateAttack({ handleSubmit, handleChange, charData }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="attacks.name"
              value={charData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Attack Bonus:
            <input
              type="number"
              name="attacks.attack_bonus"
              value={charData.attack_bonus}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Damage:
            <input
              type="text"
              name="attacks.dmg"
              value={charData.attacks.dmg}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Attack Type:
            <input
              type="text"
              name="attacks.tipe"
              value={charData.tipe}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreateAttack;

