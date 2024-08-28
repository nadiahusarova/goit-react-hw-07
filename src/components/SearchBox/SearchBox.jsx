import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <label className={s.label}>
        <span>Find contact by name:</span>
        <input
          value={filter}
          onChange={handleChange}
          type="text"
          name="search"
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
