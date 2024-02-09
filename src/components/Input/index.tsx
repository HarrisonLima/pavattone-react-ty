import IInput from "../../interfaces/IInput";

import style from "./Input.module.scss";

const Input = ({
  isAutocomplete,
  label,
  maxLength,
  minLength,
  placeholder,
  type,
}: IInput) => {
  return (
    <div className={type === "checkbox" ? style.InputComLabel : ""}>
      <input
        className={`${style.Default} ${
          type === "checkbox" ? style.Checkbox : style.Input
        }`}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        {...(isAutocomplete ? { autocomplete: "on" } : {})}
      />
      {type === "checkbox" ? (
        <label className={style.Label}>{label}</label>
      ) : null}
    </div>
  );
};

export default Input;
