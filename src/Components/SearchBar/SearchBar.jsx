import React from 'react'
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg"
import styles from "./SearchBar.module.css"

function SearchBar() {
  return (
    <div className={styles.Container}> 
      <input 
        className={styles.SearchBar}        name="Search Bar" 
        placeholder='Search an album of your choice'
      />
      <button className={styles.SearchBarButton}>
         <SearchIcon/>
      </button>
    </div>
  )
}

export default SearchBar