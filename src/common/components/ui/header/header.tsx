"use client";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { useAppContext } from "@/common/context/appContext";
import { notify } from "@/common/configs/notify";
import Star from "../../../media/icons/star.png";
export const Header = () => {
  const { user } = useAppContext();

  const handleExit = () => {
    notify("success", "başarılı bir şekilde çıkış yapıldı", {
      position: "top-center",
    });
    window.localStorage.removeItem("form");
    user.setAuth(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Star} alt="" className={styles.image} />
      </div>
      <li className={styles.dropdown}>
        <div className={styles.dropbtn}>{user.userInfo.email}</div>
        <div className={styles.dropdowncontent}>
          <span onClick={handleExit}>logout</span>
        </div>
      </li>
    </div>
  );
};
