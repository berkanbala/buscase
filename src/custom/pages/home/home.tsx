"use client";
import React from "react";
import styles from "./home.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { Header } from "@/common/components/ui/header/header";

export default function Home() {
  const { modals } = useAppContext();

  const handleSignin = () => modals.setSigninModalVisible(true);
  const handleSignup = () => modals.setSignupModalVisible(true);

  // console.log("111");
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <div className={styles.content}>
        <div className={styles.signin} onClick={handleSignin}>
          giriş
        </div>
        <div className={styles.signup} onClick={handleSignup}>
          kayıt
        </div>
      </div>
    </div>
  );
}
