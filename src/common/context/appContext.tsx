"use client";
import { createContext, useContext, useState } from "react";
import { useModals } from "../hooks/useModals";

export const MainContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(MainContext);

export const AppContext = (props: Props) => {
  const { children } = props;

  const [user, setUser] = useState({} as any);

  const {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  } = useModals();

  return (
    <MainContext.Provider
      value={{
        auth: {
          user,
          setUser,
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
  auth: {
    user: any;
    setUser: (_val: any) => void;
  };
  modals: {
    signinModalVisible: boolean;
    setSigninModalVisible: (_val: boolean) => void;
    signupModalVisible: boolean;
    setSignupModalVisible: (_val: boolean) => void;
  };
  // toasts: {
  //   showErrorNotification: (title: string) => void;
  //   showInfoNotification: (title: string) => void;
  //   showSuccessNotification: (title: string) => void;
  //   showWarningNotification: (title: string) => void;
  // };
}

interface Props {
  children: React.ReactNode;
}
