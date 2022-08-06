import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const onChangeHandler = (e) => {
    props.onInputChange(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        onChange={onChangeHandler}
        placeholder="Type keywords"
        className="search-input"
        type="text"
      />
    </div>
  );
};

export default SearchBox;
