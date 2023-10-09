"use client";
import React from "react";
import styles from "./dashboard.module.scss";
import AllModals from "@/custom/modals/allModals/allModals";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      {/* <AllModals /> */}
      <div className={styles.content}>
        <div>giriş</div>
        <div>kayıt</div>
      </div>
    </div>
  );
}
