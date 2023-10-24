import { Input } from "@/common/components/ui/input/input";
import React, { useState } from "react";
import styles from "./searchTable.module.scss";
import { Button } from "@/common/components/ui/button/button";
import { useRouter } from "next/navigation";
import { BusReserve } from "../busReserve/busReserve";
import { useForm } from "@/common/hooks/useForm";
import { signinValues } from "@/common/environments/initialValues";
export const SearchTable = (values: any) => {
  const router = useRouter();

  const [state, setState] = useForm(signinValues);
  const [showError, setError] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState(values);

  const updateValue = (e: any) => {
    // if (e.target) {
    //   setSearch({ ...search, [e.target.name]: e.target.value });
    // } else {
    //   setSearch(e);
    // }
    // setState(signinValues);
  };

  const searchForBuses = () => {
    setIsValidated(!isValidated);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    // router.push("/busReserve");
  };

  return (
    <div className={styles.searchContainer}>
      <h2> Otobüs</h2>
      {showError ? <p className={styles.errorAlert}> giriniz </p> : ""}
      <div
      //  onSubmit={updateValue}
      >
        <div className={styles.formGroup}>
          <label>
            From:
            <Input
              required
              type="text"
              name="from"
              value={state.from}
              // onChange={updateValue}
              onChange={setState}
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
              value={state.to}
              // onChange={updateValue}
              onChange={setState}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Date:
            {/* <Input required type="date" name="date" onChange={updateValue} /> */}
            <input
              required
              type="date"
              name="date"
              // value={state.date}
              // onChange={updateValue}
              onChange={setState}
            />
          </label>
        </div>
        <Button
          onClick={searchForBuses}
          className={styles.button}
          text="ara"
          // disabled="disabled"
          // disabled={!Object.values(state).every((item) => item !== "")}
        />
      </div>
    </div>
  );
};
