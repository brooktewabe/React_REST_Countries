import React, { useState } from "react";

const Search = ({ onSearch, isDarkMode, toggleTheme }) => {
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const searchHandler = () => {
    if (input.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      onSearch(input);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div data-testid='search-1'>
      <input
        type="text"
        placeholder="Enter country name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={searchHandler}>Search</button>
      {isEmpty && 
      <p style={{ color: "red" }}>
        Enter country name
      </p>}
    </div>
  );
};

export default Search;
