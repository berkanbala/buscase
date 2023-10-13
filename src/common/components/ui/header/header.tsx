"use client";
import React from "react";
import styles from "./header.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { signinValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const Header = () => {
  // const router = useRouter();
  const {
    email,
    setEmail,
    setPass,
    auth,
    setAuth,
    loginModalVisible,
    setLoginModalVisible,
  } = useAppContext();
  // const [form, setForm] = useForm(signinValues);

  const handleModal = () => {
    console.log("olmadı");
    setLoginModalVisible(!loginModalVisible);
  };

  const handleExit = () => {
    console.log("oldu");
    setAuth(false);
    setEmail("");
    setPass("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      {auth ? (
        <li className={styles.dropdown}>
          <div className={styles.dropbtn}>{email}</div>
          <div className={styles.dropdowncontent}>
            <span onClick={handleExit}>logout</span>
          </div>
        </li>
      ) : (
        <li className={styles.dropdown}>
          <div
            className={styles.dropbtnx}
            onClick={handleModal}
            // onClick={() => router.push("/home")}
          >
            {/* <Link href="/Home">login</Link> */}
            login
          </div>
        </li>
      )}
    </div>
  );
};
