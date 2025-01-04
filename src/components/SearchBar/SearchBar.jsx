import './SearchBar.css';

const SearchBar = ({ city, setCity, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <span>Add City</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v.75H19.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 20.25V6.75a1.5 1.5 0 011.5-1.5h3.75V4.5z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
