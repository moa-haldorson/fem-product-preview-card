import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, "svg">;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  icon,
  iconPosition,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type || "button"}
      className={styles.button}
      onClick={onClick}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <span className={styles["button__icon"]} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles["button__icon"]} aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
