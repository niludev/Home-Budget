import React from "react";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  key?: number;
  children?: any;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  children,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      <>{children}</>
    </button>
  );
};

export default Button;
