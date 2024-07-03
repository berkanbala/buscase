"use client";
import { useState } from "react";

export const useModals = () => {
  const [signinModalVisible, setSigninModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  return {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  };
};
