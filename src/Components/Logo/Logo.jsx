import React from 'react'
import logoImage from '../../assets/logo.png'
import styles from './Logo.module.css'

function Logo() {
  return (
    <img src={logoImage} alt="Qtify Logo" width={65} className={styles.Logo}/>
  )
}

export default Logo