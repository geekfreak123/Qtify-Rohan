import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({ title, data, filterSource, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "ALL" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  
  // console.log(data);
  const handleToggle = () => {
    setCarouselToggle((prevSate) => !prevSate);
  };

  useState(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {cardsToRender.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}