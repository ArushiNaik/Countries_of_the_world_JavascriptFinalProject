function SearchBar({value, onChange}) {
  return (
      <input 
          className="input is- primary"
          type="text"
          placeholder="Search for a country..."
          value={value}
          onChange={(event) => onChange (event.target.value)}/>

  );
}
 
export default SearchBar;