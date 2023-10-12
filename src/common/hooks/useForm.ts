import { useState } from "react";

export const useForm = (values: any) => {
  const [state, setState] = useState(values);

  const handleChange = (e: any) => {
    if (e.target) {
      setState({ ...state, [e.target.name]: e.target.value });
    } else {
      setState(e);
    }
  };
  return [state, handleChange];
};
