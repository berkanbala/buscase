"use client";
import React from "react";
import styles from "./signInModal.module.scss";
import Iconx from "../../../common/media/icons/x.png";
import Image from "next/image";
import { useAppContext } from "@/common/context/appContext";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { signinValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { notify } from "@/common/configs/notify";
import { validateLogin } from "../validation";
export default function SigninModal() {
  const { modals, user } = useAppContext();
  const [form, setForm] = useForm(signinValues);

  // console.log(user);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateLogin(form)) {
      return;
    }
    const ls = window.localStorage.getItem("form");

    if (ls) {
      if (JSON.parse(ls)?.email === form.email) {
        notify("success", "basarili bir sekilde giris yaptiniz", {
          position: "top-center",
        });
        setForm(signinValues);
        user.setAuth(true);
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
        <div className={styles.modalTitle}>SIGN IN</div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={form.email}
            placeholder="email"
            required
            onChange={setForm}
            // onChange={(e: any) => setForm({ ...user, email: e.target.value })}
          />
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            required
            onChange={setForm}
            // onChange={(e: any) =>
            //   setForm({ ...user, password: e.target.value })
            // }
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
