"use client";
import React, { useState } from "react";
import styles from "./signUpModal.module.scss";
import { useAppContext } from "@/common/context/appContext";

export default function SignupModal() {
  const { modals } = useAppContext();

  const handleCloseModal = () => modals.setSignupModalVisible(false);
  const handlePropagation = (e: any) => e.stopPropagation();

  if (!modals.signupModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={handlePropagation}>
        <div className={styles.modalTitle}>KAYIT OL</div>
        <form className={styles.modalForm}>
          <input type="text" placeholder="ad-soyad" required />
          <input type="email" placeholder="mail" required />
          <input type="password" placeholder="parola" required />
          <input type="radio" name="gender" value="male" />
          <input type="radio" name="gender" value="female" />
          <input type="date" required />
          <button className={styles.button}>kayıt ol</button>
        </form>
      </div>
    </div>
  );
}
