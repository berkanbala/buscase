import React from "react";
import styles from "./busReserve.module.scss";

export const BusReserve = () => {
  return (
    <div className={styles.container}>
      <h1>Otobüs</h1>
      <div className={styles.row}>
        <div className={styles.seatSelected}></div>
        <div className={styles.seatReserved}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>

      <ul className={styles.info}>
        <li>
          <div className={styles.seatSelected}></div>
          <small>seçili</small>
        </li>
        <li>
          <div className={styles.seat}></div>
          <small>boş</small>
        </li>
        <li>
          <div className={styles.seatReserved}></div>
          <small>dolu</small>
        </li>
      </ul>

      <p className={styles.text}>
        <span id="count">3</span>
        adet koltuk için hesaplanan tutar <span id="amount">150 tl</span>
      </p>
      <button>öde</button>
    </div>
  );
};
