import React from "react";
import s from "./SearchBox.module.css"; 

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <label className={s.label}>
      Find contact by name
      <input className={s.input} type="text" onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
