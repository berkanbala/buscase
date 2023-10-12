import { useState } from "react";

export const useFormSignupHook = (...params: any) => {
  const [formValue, setFormValue] = useState(params);

  const handleName = (e: any) =>
    setFormValue({ ...formValue, name: e.target.value });

  const handleSurname = (e: any) =>
    setFormValue({ ...formValue, surname: e.target.value });

  const handleEmail = (e: any) =>
    setFormValue({ ...formValue, email: e.target.value });

  const handlePassword = (e: any) =>
    setFormValue({ ...formValue, password: e.target.value });

  const handleGender = (e: any) =>
    setFormValue({ ...formValue, gender: e.target.value });

  const handleDate = (e: any) =>
    setFormValue({ ...formValue, date: e.target.value });

  return [
    formValue,
    handleDate,
    handleEmail,
    handleGender,
    handleName,
    handlePassword,
    handleSurname,
  ];
};
