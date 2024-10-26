import { useState } from "react";
import styles from "./DestinationFilter.module.css";

export default function DestinationFilter() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
