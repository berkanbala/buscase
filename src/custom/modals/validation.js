export const validate = (props) => {
  if (
    props.fname === "" ||
    props.email === "" ||
    props.phone === "" ||
    props.textarea === ""
  ) {
    return false;
  }
  return true;
};

export const validateLogin = (email, password) => {
  if (email === "" || password === "") {
    return false;
  }
  return true;
};
