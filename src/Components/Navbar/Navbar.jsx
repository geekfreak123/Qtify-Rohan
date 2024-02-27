import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Button from '../Button/Button.jsx'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <Logo/>
        <SearchBar/>
        <Button/>
    </nav>
  )
}

export default Navbar