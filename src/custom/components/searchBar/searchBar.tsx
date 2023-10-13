"use client";
import React, { useState } from "react";
import styles from "./searchBar.module.scss";

export const SearchBar = () => {
  const [showError, setError] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState({ from: "", to: "", date: "" });

  const updateValue = (e: any) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
  };

  return (
    <div className={styles.searchContainer}>
      <h2> otobüs</h2>
      {showError ? <p className={styles.errorAlert}> giriniz </p> : ""}
      <div className={styles.formGroup}>
        <label>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button onClick={searchForBuses} className={styles.button}>
        ara
      </button>
    </div>
  );
};
