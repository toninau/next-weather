'use client';
import React from 'react';

type ButtonProps = {
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'primary' | 'secondary' | 'minor';
  children?: React.ReactNode;
  icon?: React.ReactElement;
  ariaLabel?: string;
  onClick?: () => void;
};

function Button({
  disabled = false,
  type = 'button',
  variant = 'primary',
  children,
  icon,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <button
      className="group flex items-center rounded-md bg-blue-500 py-2 pl-2 pr-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400"
      onClick={handleClick}
      type={type}
      aria-label={ariaLabel}
    >
      {!!icon && <div className="mr-2 h-5 w-5 fill-current">{icon}</div>}
      {!!children && children}
    </button>
  );
}

export default Button;
