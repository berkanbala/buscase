"use client";
import { createContext, useContext, useState } from "react";
import { useModals } from "../hooks/useModals";

export const MainContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(MainContext);

export const AppContext = (props: Props) => {
  const { children } = props;

  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({} as any);

  const {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  } = useModals();

  return (
    <MainContext.Provider
      value={{
        user: {
          auth,
          setAuth,
          userInfo,
          setUserInfo,
        },
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
  user: {
    auth: boolean;
    setAuth: (_val: boolean) => void;
    userInfo: any;
    setUserInfo: (_val: boolean) => void;
  };

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
