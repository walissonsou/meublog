import React from "react";
import styles from "./Search.module.css";

const SearchBar = ({ value, handleSearchArtic, clearSearch, formSubmit }) => (
  <div className={styles.searchbar}>
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Procurar por artigo"
        onChange={handleSearchArtic}
        value={value}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Ir</button>
    </form>
  </div>
);

export default SearchBar;
