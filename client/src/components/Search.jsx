import { Input } from "@/components/ui/input"

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search:</label>
        <Input
          type="text"
          id="search"
          placeholder=" Search pizza or restuarant choice..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;