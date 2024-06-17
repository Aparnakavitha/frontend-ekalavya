import React, { useState } from "react";
import styles from "./Searchbar.module.css";

const SearchBar = ({ variant = "large", placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    console.log(query,"cfvgbhnjkl")
  };

  let boxClassName;
  if (variant === "large") {
    boxClassName = styles.box;
  } else if (variant === "small") {
    boxClassName = styles["small-box"];
  } else if (variant === "custom") {
    boxClassName = styles["custom-box"];
  } else {
    boxClassName = styles.none;
  }

  return (
    <div className={boxClassName}>
      <form onSubmit={handleSearch}>
        <div className={styles["search-box"]}>
          <input
            type="text"
            className={styles["search-input"]}
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles["search-button"]}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
