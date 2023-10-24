import React from "react";
import styles from "./busPayout.module.scss";
import { useParams } from "next/navigation";
export const BusPayout = () => {
  const { selected, totalPrice } = useParams();
  return (
    <div className={styles.container}>
      <h3>SELECTED SEATS</h3>
      {selected}
      <h3>TOTALPRICE : {totalPrice}</h3>
    </div>
  );
};
