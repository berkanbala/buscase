import React, { useState } from "react";
import styles from "./signUpModal.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { validateLogin } from "../validation";
export default function SignUpModal() {
  const handlePropagation = (e: any) => e.stopPropagation();

  const {}: // setAuth,
  // setUser,
  // setPass,
  // loginModalVisible,
  // setLoginModalVisible,
  any = useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [email, setEmail] = useState("");

  const proceedLogin = (e: any) => {
    e.preventDefault();

    if (!validateLogin(firstNameValue, passwordValue)) {
      return;
    }
    console.log("kayıt");
    // setLoginModalVisible(false);
    // setUser(firstNameValue);
    // setPass(passwordValue);
    // setAuth(true);
    setEmail(email);
    setFirstNameValue("");
    setPasswordValue("");
  };

  // const handleModal = () => {
  //   setLoginModalVisible(false);
  // };
  // if (!loginModalVisible) return null;
  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>KAYIT OL</div>
        <form className={styles.modalForm} onSubmit={proceedLogin}>
          <input
            type="text"
            placeholder="ad-soyad"
            required
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
          />
          <input
            type="email"
            placeholder="mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="parola"
            required
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <input type="radio" name="gender" value="male" />
          <input type="radio" name="gender" value="female" />
          <input type="date" required />
          <button className={styles.button}>kayıt ol</button>
        </form>
      </div>
    </div>
  );
}
