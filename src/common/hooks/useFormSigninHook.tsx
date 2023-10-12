import { useState } from "react";

export const useFormSigninHook = (params: any) => {
  const [form, setForm] = useState(params);

  const handleChange = (e: any) => {
    if (e.target) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm(e);
    }
  };
  return [form, handleChange];
};
