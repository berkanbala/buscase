"use client";
import React from "react";
import styles from "./SignInModal.module.scss";
import { useAppContext } from "@/common/context/appContext";

export default function SigninModal() {
  const { modals } = useAppContext();

  const handleCloseModal = () => modals.setSigninModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  if (!modals.signinModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>GİRİŞ</div>
        <form className={styles.modalForm}>
          <input type="text" name="name" placeholder="ad-soyad" required />
          <input
            type="password"
            name="password"
            placeholder="parola"
            required
          />
          <button className={styles.button}>giriş yap</button>
        </form>
      </div>
    </div>
  );
}
