import React, { useState } from "react";
import styles from "./signUpModal.module.scss";

export default function SignUpModal() {
  const handleModal = () => {};
  return (
    <div className={styles.container} onClick={handleModal}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
