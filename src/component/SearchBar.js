import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';
import countriesData from './countries.json'; // Import the JSON data

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = countriesData.filter(
        (country) =>
          country.country.toLowerCase().startsWith(term) ||
          country.capital.toLowerCase().startsWith(term)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by country or capital..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="icon-wrapper">
          <FaMicrophone className="microphone-icon" /> {/* Microphone icon */}
          <FaCamera className="camera-icon" /> {/* Camera icon */}
        </div>
      </div>

      {filteredCountries.length > 0 && (
        <ul className="suggestions-list">
          {filteredCountries.map((country, index) => (
            <li key={index} className="suggestion-item">
              <FaSearch className="suggestion-icon" />
              <strong>{country.country}</strong> - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;