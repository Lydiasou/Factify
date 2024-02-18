import React from 'react';
import '../src/app/globals.scss';

interface ButtonProps {
  className: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, href, onClick, children }) => {
  return <a className={className} href={href} onClick={onClick}>{children}</a>;
};

export default Button;
