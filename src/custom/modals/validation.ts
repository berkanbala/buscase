export const validate = (props: any) => {
  if (
    props.fname === "" ||
    props.email === "" ||
    props.passwords === "" ||
    props.gender === "" ||
    props.birthday === ""
  ) {
    return false;
  }
  return true;
};

export const validateLogin = (firstNameValue: any, passwordValue: any) => {
  //authname-authpasswords
  if (firstNameValue === "" || passwordValue === "") {
    return false;
  }
  return true;
};
