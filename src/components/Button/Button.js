import React from "react";

import "./Button.css";

const Button = ({
  type,
  variant,
  size,
  style,
  leadIcon,
  tailIcon,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`${variant} ${size}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {leadIcon && <div>{leadIcon}</div>}
      {children}
      {tailIcon && <div>{tailIcon}</div>}
    </button>
  );
};

export default Button;
