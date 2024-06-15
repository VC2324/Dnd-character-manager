
function CharacterProfile({ character, handleSubmit, handleChange, profData }) {
  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>Name:<input type="text" name="name" value={profData.name} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>Class:<input type="text" name="klass" value={profData.klass} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>Level:<input type="number" name="level" value={profData.level} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>Background:<input type="text" name="background" value={profData.background} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>Race:<input type="text" name="race" value={profData.race} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>XP:<input type="number" name="xp" value={profData.xp} onChange={handleChange} required /></label>
          </div>
          <div>
              <label>Alignment:<input type="text" name="alignment" value={profData.alignment} onChange={handleChange} required /></label>
          </div>
      </form>
  );
}

export default CharacterProfile;
