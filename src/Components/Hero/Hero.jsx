import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibrating-headphone.svg";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroHeading}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <VibratingHeadphone />
    </div>
  );
}

export default Hero;