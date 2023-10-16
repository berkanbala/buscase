"use client";
import React, { useState } from "react";
import styles from "./SigninModal.module.scss";
import Iconx from "../../../common/media/icons/x.png";
import Image from "next/image";
import { useAppContext } from "@/common/context/appContext";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { signinValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { notify } from "@/common/configs/notify";
import { validateLogin } from "../validation";
import { redirect } from "next/navigation";
export default function SigninModal() {
  const { modals, setAuth } = useAppContext();
  const [form, setForm] = useForm(signinValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateLogin(form)) {
      // redirect
      return;
    }
    // setForm(signinValues);
    const ls = window.localStorage.getItem("form");

    if (ls) {
      if (JSON.parse(ls)?.email === form.email) {
        notify("success", "basarili bir sekilde giris yaptiniz", {
          position: "top-center",
        });
        setForm(signinValues);
        console.log(form);
      } else {
        notify("error", "emailler eslesmiyo");
      }
    } else {
      notify("warning", "lutfen once kayit olunuz");
    }
    setAuth(true);
    modals.setSigninModalVisible(false);
  };

  const handleCloseModal = () => modals.setSigninModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  if (!modals.signinModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>SIGN IN</div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={form.email}
            placeholder="email"
            required
            onChange={setForm}
          />
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            required
            onChange={setForm}
          />
          <Button
            className={styles.button}
            type="submit"
            text={"Sign In"}
            disabled={!Object.values(form).every((item) => item !== "")}
          />
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <Image src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
}
