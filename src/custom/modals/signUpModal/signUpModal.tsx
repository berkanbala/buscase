"use client";
import React, { useState } from "react";
import styles from "./signupModal.module.scss";
import { useAppContext } from "@/common/context/appContext";
import Image from "next/image";
import Iconx from "../../../common/media/icons/x.png";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { useFormSignupHook } from "@/common/hooks/useFormSignupHook";

export default function SignupModal() {
  const { modals } = useAppContext();

  const handleCloseModal = () => modals.setSignupModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   surname: "",
  //   email: "",
  //   password: "",
  //   gender: "",
  //   date: "",
  // } as any);
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    gender: "",
    date: "",
  };

  const [formValue, setFormValue] = useFormSignupHook(initialValues);

  // const handleName = (e: any) =>
  //   setFormValue({ ...formValue, name: e.target.value });

  // const handleSurname = (e: any) =>
  //   setFormValue({ ...formValue, surname: e.target.value });

  // const handleEmail = (e: any) =>
  //   setFormValue({ ...formValue, email: e.target.value });

  // const handlePassword = (e: any) =>
  //   setFormValue({ ...formValue, password: e.target.value });

  // const handleGender = (e: any) =>
  //   setFormValue({ ...formValue, gender: e.target.value });

  // const handleDate = (e: any) =>
  //   setFormValue({ ...formValue, date: e.target.value });

  if (!modals.signupModalVisible) return null;

  console.log("kayıt");

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>KAYIT OL</div>
        <form className={styles.modalForm}>
          {/* <input
            type="text"
            value={formValue.name}
            placeholder="name"
            onChange={handleName}
          /> */}
          <Input
            type="text"
            value={formValue.name}
            placeholder="name"
            onChange={setFormValue.handleName}
            required
          />
          {/* <input
            type="text"
            value={formValue.surname}
            placeholder="surname"
            onChange={handleSurname}
          /> */}
          <Input
            type="text"
            value={formValue.surname}
            placeholder="surname"
            onChange={setFormValue.handleSurname}
            required
          />
          {/* <input
            type="email"
            value={formValue.email}
            placeholder="email"
            onChange={handleEmail}
          /> */}
          <Input
            type="email"
            value={formValue.email}
            placeholder="email"
            onChange={setFormValue.handleEmail}
            required
          />
          {/* <input
            type="password"
            value={formValue.password}
            placeholder="password"
            onChange={handlePassword}
          /> */}
          <Input
            type="password"
            value={formValue.password}
            placeholder="password"
            onChange={setFormValue.handlePassword}
            required
          />
          <select onChange={setFormValue.handleGender}>
            <option value="" disabled hidden>
              seciniz
            </option>
            <option value="kadin">kadin</option>
            <option value="erkek">erkek</option>
            <option value="belirmetk istemiyorum">belirmetk istemiyorum</option>
          </select>
          {/* <input type="date" value={formValue.date} onChange={handleDate} /> */}
          <Input
            type="date"
            value={formValue.date}
            onChange={setFormValue.handleDate}
            required
          />
          {/* <button
            className={styles.button}
            onClick={() => console.log(formValue)}
          >
            kayıt ol
          </button> */}
          <Button
            className={styles.button}
            onClick={() => console.log(formValue)}
            text="kayıt ol"
            disabled={Object.values(formValue).some((form) => form === "")}
          />
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <Image src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
}
