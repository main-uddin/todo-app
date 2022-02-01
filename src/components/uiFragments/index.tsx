import "./index.css";

interface InputProps {
  forwardRef: any;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

interface ButtonProps {
  color: string;
  value: string;
  type?: string;
  onClick?: () => void;
}

export const Input = ({
  forwardRef,
  type,
  defaultValue,
  placeholder,
}: InputProps) => (
  <input
    className="form__input"
    ref={forwardRef}
    type={type}
    defaultValue={defaultValue}
    placeholder={placeholder}
  />
);

export const Button = ({ color, value, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      background: "transparent",
      padding: "10px",
      margin: "0px 5px",
      border: `1px solid ${color}`,
      color: `${color}`,
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    {value}
  </button>
);
