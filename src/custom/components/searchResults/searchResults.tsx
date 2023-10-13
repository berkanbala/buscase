"use client";
import React from "react";
import styles from "./searchResults.module.scss";

export const SearchResults = () => {
  const selectBus = () => {};

  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Bus Availability </h1>
      <h4>Buses for to on</h4>
      <div className={styles.busesAvailContainer}>
        return (
        <div className={styles.busAvail} onClick={() => selectBus()}>
          <div className={styles.dFlex}>
            <p className={styles.name}>bus.name</p>
            <p className={styles.fare}>Fare:bus.fare</p>
          </div>
          <div className={styles.dFlex}>
            <p>Arrl Time: bus.arrivalTime</p>
            <p>Dept Time: bus.depatureTim</p>
            <p>bus.offers</p>
          </div>
        </div>
        );
      </div>
    </div>
  );
};
