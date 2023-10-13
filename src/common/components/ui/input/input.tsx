import clsx from "clsx";
import styles from "./input.module.scss";

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  isExistPassword,
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
