import React from "react";
import Hero from "../../Components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../Components/Section/Section";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../../api/api";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero/>
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          type="songs"
          filterSource={fetchFilters}
        />
      </div>
    </>
  );
}

export default HomePage;
