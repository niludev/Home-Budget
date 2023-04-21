import React from "react";

interface InputProps {
  name?: string;
  type: any;
  placeholder?: string;
  required?: boolean;
  value?: any;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  required,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
