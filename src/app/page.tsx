"use client";
import { HomeLayout } from "@/common/auth/homeLayout";
import { useAppContext } from "@/common/context/appContext";
import { useEffect, useState } from "react";

export default function Index() {
  const { user } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ls = window.localStorage.getItem("form");
    setTimeout(() => {
      setLoading(true);
    }, 1);
    if (ls && JSON.parse(ls)?.email) {
      user.setUserInfo(JSON.parse(ls || ""));
      user.setAuth(true);
    } else {
      user.setAuth(false);
    }
  }, []);

  return !loading ? <div>loading</div> : <HomeLayout />;
}
