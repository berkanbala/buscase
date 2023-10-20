import { Input } from "@/common/components/ui/input/input";
import React, { useState } from "react";
import styles from "./searchTable.module.scss";
import { Button } from "@/common/components/ui/button/button";
import { useRouter } from "next/navigation";
import { BusReserve } from "../busReserve/busReserve";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const SearchTable = (values: any) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [showError, setError] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState(values);
  // const [search, setSearch] = useState({ from: "", to: "", date: "" });

  const updateValue = (e: any) => {
    if (e.target) {
      setSearch({ ...search, [e.target.name]: e.target.value });
    } else {
      setSearch(e);
    }
    // setMessage(e.target.value);
  };

  const searchForBuses = () => {
    setIsValidated(!isValidated);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    router.push("/busReserve");
  };

  return (
    <div className={styles.searchContainer}>
      <h2> Otobüs</h2>
      {showError ? <p className={styles.errorAlert}> giriniz </p> : ""}
      <div>
        <div className={styles.formGroup}>
          <label>
            From:
            <Input
              required
              type="text"
              name="from"
              onChange={updateValue}
              value={message}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            To:
            <Input
              required
              type="text"
              name="to"
              onChange={updateValue}
              value={message}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Date:
            {/* <Input required type="date" name="date" onChange={updateValue} /> */}
            <input required type="date" name="date" onChange={updateValue} />
          </label>
        </div>
        {/* <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
        /> */}
        <Button
          onClick={searchForBuses}
          className={styles.button}
          text="ara"
          // disabled={!Object.values(form).every((item) => item !== "")}
          // disabled="disabled"
        />
      </div>
    </div>
  );
};
