import { toast } from "react-toastify";

export const notify = (
  type: "info" | "warning" | "success" | "error",
  message: string,
  options?: any
) => {
  const defaultOptions: any = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options,
  };

  toast[type](message, defaultOptions);
};
