"use client";
import React from "react";
import styles from "./searchResults.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SearchResults = () => {
  const buses = useSelector((state: any) => state.buses);
  const search = useSelector((state: any) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectBus = (bus: any) => {
    dispatch({ id: bus.id, type: "BUS_SELECTION" });
    navigate("/selection");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Bus Availability </h1>
      <h4>
        Buses for {search.from} to {search.to} on {search.date}
      </h4>
      <div className={styles.busesAvailContainer}>
        {buses.map((bus: any, index: any) => {
          return (
            <div
              className={styles.busAvail}
              onClick={() => selectBus(bus)}
              key={index}
            >
              <div className={styles.dFlex}>
                <p className={styles.name}>{bus.name}</p>
                <p className={styles.fare}>Fare:{bus.fare}</p>
              </div>
              <div className={styles.dFlex}>
                <p>Arrl Time: {bus.arrivalTime}</p>
                <p>Dept Time: {bus.depatureTime}</p>
                <p>{bus.offers}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
