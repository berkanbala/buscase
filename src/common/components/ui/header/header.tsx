"use client";
import React from "react";
import styles from "./header.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { SearchBar } from "@/custom/components/searchBar/searchBar";

export const Header = () => {
  const { email, setEmail, setPass } = useAppContext();

  const handleExit = () => {
    setEmail("");
    setPass("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <li className={styles.dropdown}>
        <div className={styles.dropbtn}>{email}</div>
        <div className={styles.dropdowncontent}>
          <span onClick={handleExit}>logout</span>
        </div>
      </li>
      {/* <SearchBar /> */}
    </div>
  );
};
