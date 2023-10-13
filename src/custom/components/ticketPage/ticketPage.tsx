"use client";
import React from "react";
import styles from "./ticketPage.module.scss";
export const TicketPage = () => {
  const proceedToPassengerDetails = () => {};
  return (
    <div className={styles.seatContainer}>
      The selected bus name is selectedBus.name
      <div className={styles.seatContent}>
        <div className="">
          <input className={styles.seat} type="checkbox" />
          <label>seat.no</label>
        </div>
      </div>
      <button className={styles.proceed} onClick={proceedToPassengerDetails}>
        Proceed
      </button>
    </div>
  );
};
