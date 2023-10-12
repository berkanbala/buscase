import clsx from "clsx";
// import EyesOpen from "common/media/icons/eyesOpen.svg";
// import EyesClose from "common/media/icons/eyesClose.svg";
import styles from "./input.module.scss";

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  disabled,
  onClick,
  className,
  placeholder,
  isExistPassword,
  isPasswordVisible,
  required,
  readOnly,
}: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        className,
        disabled === true ? styles.disabled : ""
      )}
    >
      {label && <label>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          readOnly={readOnly}
          required={required}
          onChange={onChange}
          value={value || ""}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          className={clsx(
            isExistPassword === true ? styles.existPasswordInput : ""
          )}
        />
        {/* {isExistPassword && (
          <img
            className={styles.eyesIcon}
            onClick={onClick}
            src={isPasswordVisible ? EyesClose : EyesOpen}
            alt="eyes icon"
          />
        )} */}
      </div>
    </div>
  );
};

interface Props {
  readOnly?: boolean;
  required?: any;
  name?: string;
  onClick?: any;
  type: string;
  label?: string;
  value?: any;
  disabled?: boolean;
  className?: any;
  isPasswordVisible?: boolean;
  isExistPassword?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
