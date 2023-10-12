"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./searchBar.module.scss";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: "", to: "", date: "" });
  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
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
    dispatch({ search, type: "SEARCH_BUS" });
    navigate("availability");
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
