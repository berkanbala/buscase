"use client";
import React from "react";
import styles from "./header.module.scss";
import { useAppContext } from "@/common/context/appContext";
import { signinValues } from "@/common/environments/initialValues";
import { useForm } from "@/common/hooks/useForm";
import { validateLogin } from "@/custom/modals/validation";

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

  const [form, setForm] = useForm(signinValues);

  const handleModal = () => {
    // if (!validateLogin(form)) {
    //   return;
    // }

    console.log("olmadı");
    setLoginModalVisible(!loginModalVisible);
    // setForm(signinValues);
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
      {
        auth && (
          <li className={styles.dropdown}>
            <div className={styles.dropbtn}>{email}</div>
            <div className={styles.dropdowncontent}>
              <span onClick={handleExit}>logout</span>
            </div>
          </li>
        )
        // : (
        //   <li className={styles.dropdown}>
        //     <div className={styles.dropbtnx} onClick={handleModal}>
        //       login
        //     </div>
        //   </li>
        // )
      }
    </div>
  );
};
