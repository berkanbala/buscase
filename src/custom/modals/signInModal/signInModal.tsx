import React, { useState } from "react";
import styles from "./SignInModal.module.scss";

export default function SignInModal() {
  const handleModal = () => {};
  return (
    <div className={styles.container} onClick={handleModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
