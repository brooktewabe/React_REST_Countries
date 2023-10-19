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
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
