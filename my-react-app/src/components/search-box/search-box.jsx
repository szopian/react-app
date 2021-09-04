import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => this.setState({ handleChange })}
      />
    </div>
  );
};
