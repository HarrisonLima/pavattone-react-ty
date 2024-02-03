import IInput from "../../interfaces/IInput";

const Input = ({
  type,
  isAutocomplete,
  maxLength,
  minLength,
  placeholder,
}: IInput) => {
  return (
    <input
      type={type}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      {...(isAutocomplete ? { autocomplete: "on" } : {})}
    />
  );
};

export default Input;
