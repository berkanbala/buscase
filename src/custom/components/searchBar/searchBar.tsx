"use client";
import React, { useState } from "react";
import styles from "./searchBar.module.scss";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { notify } from "@/common/configs/notify";

export const SearchBar = () => {
  const [showError, setError] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState({ from: "", to: "", date: "" });

  const updateValue = (e: any) => {
    if (e.target) {
      setSearch({ ...search, [e.target.name]: e.target.value });
    } else {
      setSearch(e);
    }
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
      <h2> Otobüs</h2>
      {showError ? <p className={styles.errorAlert}> giriniz </p> : ""}
      <div className={styles.formGroup}>
        <label>
          From:
          <Input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>
          To:
          <Input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>
          Date:
          <Input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <Button onClick={searchForBuses} className={styles.button} text="ara" />
    </div>
  );
};
