import React from 'react';
import '../src/app/globals.scss';

interface ButtonProps {
  className: string;
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, href, children }) => {
  return <a className={className} href={href}>{children}</a>;
};

export default Button;
