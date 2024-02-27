import React from 'react'
import logoImage from '../../assets/logo.png'
import "./Logo.css"

function Logo() {
  return (
    <img id ="logo" src={logoImage} alt="Qtify Logo" width={65} />
  )
}

export default Logo