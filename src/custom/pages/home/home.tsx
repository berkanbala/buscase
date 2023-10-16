"use client";
import React from "react";
import styles from "./home.module.scss";
import { useAppContext } from "@/common/context/appContext";

export default function Home() {
  const { modals } = useAppContext();

  const handleSignin = () => modals.setSigninModalVisible(true);
  const handleSignup = () => modals.setSignupModalVisible(true);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.signin} onClick={handleSignin}>
          Sign In
        </div>
        <div className={styles.signup} onClick={handleSignup}>
          Sign Up
        </div>
      </div>
    </div>
  );
}
