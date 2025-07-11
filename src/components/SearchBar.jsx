import './SearchBar.css';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Buscar por marca o modelo..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}