"use client";
import React, { useState } from "react";
import styles from "./SigninModal.module.scss";
import { useAppContext } from "@/common/context/appContext";
import Image from "next/image";
import Iconx from "../../../common/media/icons/x.png";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { useFormSigninHook } from "@/common/hooks/useFormSigninHook";

export default function SigninModal() {
  const initialValues = {
    fname: "",
    password: "",
  };
  const { modals, setAuth, setPass, setUser } = useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleCloseModal = () => modals.setSigninModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  const [form, setForm] = useFormSigninHook(initialValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(form);
    setForm(initialValues);
    setFirstNameValue("");
    setPasswordValue("");
    setUser(firstNameValue);
    setPass(passwordValue);
    setAuth(true);
    modals.setSigninModalVisible(false);
  };

  if (!modals.signinModalVisible) return null;

  console.log("giriş");
  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>GİRİŞ</div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          {/* <input type="text" name="name" placeholder="ad-soyad" required /> */}
          <Input
            type="text"
            name="fname"
            value={form.fname}
            placeholder="ad-soyad"
            required
            // readOnly={true}
            onChange={setForm}
          />
          {/* <input
            type="password"
            name="password"
            placeholder="parola"
            required
          /> */}
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="parola"
            required
            // readOnly={true}
            onChange={setForm}
          />
          {/* <button className={styles.button} type="submit">giriş yap</button> */}
          <Button
            className={styles.button}
            type="submit"
            text={"giriş yap"}
            disabled={Object.values(form).some((formValue) => formValue === "")}
            // disabled={Object.values({ firstNameValue, passwordValue }).some(
            //   (loginValue) => loginValue === ""
            // )}
          />
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <Image src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
}
