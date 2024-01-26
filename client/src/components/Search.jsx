import { Input } from "@/components/ui/input"

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <Input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;