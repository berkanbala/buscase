import React, { useState } from "react";
import styles from "./SignInModal.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { validateLogin } from "../validation";
export default function SignInModal() {
  const handlePropagation = (e: any) => e.stopPropagation();

  const {}: // setAuth,
  // setUser,
  // setPass,
  // loginModalVisible,
  // setLoginModalVisible,
  any = useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const proceedLogin = (e: any) => {
    e.preventDefault();
    console.log("giriş");
    if (!validateLogin(firstNameValue, passwordValue)) {
      return;
    }
    // console.log("state");
    // setLoginModalVisible(false);
    // setUser(firstNameValue);
    // setPass(passwordValue);
    // setAuth(true);
    setFirstNameValue("");
    setPasswordValue("");
  };

  // const handleModal = () => {
  //   setLoginModalVisible(false);
  // };
  // if (!loginModalVisible) return null;

  return (
    <div
      className={styles.container}
      // onClick={handleModal}
    >
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>GİRİŞ</div>
        <form className={styles.modalForm} onSubmit={proceedLogin}>
          <input
            type="text"
            name="name"
            placeholder="ad-soyad"
            required
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
            // readOnly={true}
          />
          <input
            type="password"
            name="password"
            placeholder="parola"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
            // readOnly={true}
          />
          <button className={styles.button}>giriş yap</button>
        </form>
      </div>
    </div>
  );
}
