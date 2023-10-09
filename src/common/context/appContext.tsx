"use client";
import { createContext, useContext, useState } from "react";
import { useModals } from "../hooks/useModals";

export const MainContext = createContext({});

export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  //   const { loginModalVisible, setLoginModalVisible }: any = useModals(false);

  const contextValue = {
    auth,
    setAuth,
    user,
    setUser,
    pass,
    setPass,
    // loginModalVisible,
    // setLoginModalVisible,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
