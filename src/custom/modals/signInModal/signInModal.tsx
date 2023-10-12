"use client";
import React from "react";
import styles from "./SigninModal.module.scss";
import { useAppContext } from "@/common/context/appContext";
import Image from "next/image";
import Iconx from "../../../common/media/icons/x.png";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { signinValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { notify } from "@/common/configs/notify";

export default function SigninModal() {
  const { modals } = useAppContext();
  const [form, setForm] = useForm(signinValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
    modals.setSigninModalVisible(false);
  };

  const handleCloseModal = () => modals.setSigninModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  if (!modals.signinModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>GİRİŞ</div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={form.email}
            placeholder="ad-soyad"
            required
            onChange={setForm}
          />
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="parola"
            required
            onChange={setForm}
          />
          <Button
            className={styles.button}
            type="submit"
            text={"giriş yap"}
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
