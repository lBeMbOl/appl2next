"use client";

import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  bcgcolor?: string;
  href?: string;
  color?: string;
}

export const Button = ({
  size = "medium",
  bcgcolor = "#000027",
  href,
  children,
  className,
  color = "#ffffff",
  ...props
}: ButtonProps) => {
  const sizeClass = {
    small: styles.buttonSmall,
    medium: styles.buttonMedium,
    large: styles.buttonLarge,
  }[size];

  const buttonStyle = {
    backgroundColor: bcgcolor,
    color: color,
  };

  const ButtonContent = (
    <button
      style={buttonStyle}
      className={`${styles.button} ${sizeClass} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );

  return href ? (
    <Link href={href} passHref legacyBehavior>
      {ButtonContent}
    </Link>
  ) : (
    ButtonContent
  );
};
