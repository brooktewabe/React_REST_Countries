import React, { useState } from "react";

const Search = ({ onSearch }) => {
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

  return (
    <div >
      <input
        type="text"
        placeholder="Enter country name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div data-testid='search-1'>
      <button onClick={searchHandler}>Search</button></div>
      {isEmpty && 
      <p style={{ color: "red" }}>
        Enter country name
      </p>}
    </div>
  );
};

export default Search;
