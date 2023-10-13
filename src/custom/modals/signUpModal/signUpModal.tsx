"use client";
import React from "react";
import styles from "./signupModal.module.scss";
import Image from "next/image";
import Iconx from "../../../common/media/icons/x.png";
import { useAppContext } from "@/common/context/appContext";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { signupValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { notify } from "@/common/configs/notify";

export default function SignupModal() {
  const { modals } = useAppContext();
  const [form, setForm] = useForm(signupValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (window.localStorage.getItem("form")) {
      notify("warning", "daha once kayit yaptiniz", {
        position: "top-center",
      });
    } else {
      console.log(form);
      const { password, ...newForm } = form;
      window.localStorage.setItem("form", JSON.stringify(newForm));
      notify("success", "basarili bir sekilde kayit oldunuz");
      setForm(signupValues);
    }
    modals.setSignupModalVisible(false);
  };

  const handleCloseModal = () => modals.setSignupModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  if (!modals.signupModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>SING UP</div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={form.name}
            placeholder="name"
            onChange={setForm}
            required
          />
          <Input
            type="text"
            name="surname"
            value={form.surname}
            placeholder="surname"
            onChange={setForm}
            required
          />
          <Input
            name="email"
            type="text"
            value={form.email}
            placeholder="email"
            onChange={setForm}
            required
          />
          <Input
            name="password"
            type="password"
            value={form.password}
            placeholder="password"
            onChange={setForm}
            required
          />
          <select defaultValue="" onChange={setForm} name="gender">
            <option value="" disabled hidden>
              select
            </option>
            <option value="kadin">woman</option>
            <option value="erkek">man</option>
            <option value="belirmetk istemiyorum">
              I dont want to specify
            </option>
          </select>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={setForm}
            required
          />
          <Button
            className={styles.button}
            text="register"
            disabled={!Object.values(form).every((form) => form !== "")}
          />
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <Image src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
}
