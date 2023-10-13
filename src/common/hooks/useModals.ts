"use client";
import { useState } from "react";

export const useModals = () => {
  const [signinModalVisible, setSigninModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  // const [loginModalVisible, setLoginModalVisible] = useState(false);

  return {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
    // loginModalVisible,
    // setLoginModalVisible,
  };
};
