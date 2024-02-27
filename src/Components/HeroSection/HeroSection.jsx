import React from 'react'
import HeadPhoneIcon from "../HeadPhoneIcon/HeadPhoneIcon.jsx"
import styles from "./HeroSection.module.css"

function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <h1 className={styles.Heading}>
        100 Thousand Songs, ad-free<br/>
        Over thousands podcast episodes      
      </h1>
      <HeadPhoneIcon/>
    </div>
  )
}

export default HeroSection