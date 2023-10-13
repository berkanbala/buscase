"use client";
import { createContext, useContext, useState } from "react";
import { useModals } from "../hooks/useModals";

export const MainContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(MainContext);

export const AppContext = (props: Props) => {
  const { children } = props;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState(false);

  const {
    loginModalVisible,
    setLoginModalVisible,
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  } = useModals();

  return (
    <MainContext.Provider
      value={{
        loginModalVisible,
        setLoginModalVisible,
        pass,
        setPass,
        auth,
        setAuth,
        email,
        setEmail,
        modals: {
          signinModalVisible,
          setSigninModalVisible,
          signupModalVisible,
          setSignupModalVisible,
        },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

interface IAppContext {
  loginModalVisible: any;
  setLoginModalVisible: any;
  pass: any;
  setPass: any;
  auth: any;
  setAuth: any;
  // auth: {
  email: any;
  setEmail: (_val: any) => void;
  // };
  modals: {
    signinModalVisible: boolean;
    setSigninModalVisible: (_val: boolean) => void;
    signupModalVisible: boolean;
    setSignupModalVisible: (_val: boolean) => void;
  };
}

interface Props {
  children: React.ReactNode;
}
