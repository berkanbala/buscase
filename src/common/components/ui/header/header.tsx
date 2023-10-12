"use client";
import React from "react";
import styles from "./header.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { useModals } from "@/common/hooks/useModals";

export const Header = () => {
  // const { auth } = useAppContext();
  const { user, setUser, auth, setAuth, pass, setPass } = useAppContext();

  // const { loginModalVisible, setLoginModalVisible } = useModals(false);

  const handleExit = () => {
    // auth.setUser(false);
    setAuth(false);
    setUser("");
    setPass("");
  };

  // const handleModal = () => {
  //   setLoginModalVisible(!loginModalVisible);
  //   console.log("tıklandı");
  // };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>

      {/* {auth ? ( */}
      <li className={styles.dropdown}>
        <div className={styles.dropbtn}>{user}</div>
        <div className={styles.dropdowncontent}>
          <span onClick={handleExit}>logout</span>
        </div>
      </li>
      {/* ) : (
        <li className={styles.dropdown}>
          <div className={styles.dropbtnx} onClick={handleModal}>
            login
          </div>
        </li>
      )} */}
    </div>
  );
};
