export default interface IInput {
  isAutocomplete?: boolean;
  label?: string
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  type: "date" | "number" | "text" | "password" | "radio" |"checkbox";
}
