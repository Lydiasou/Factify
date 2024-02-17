import React from 'react';

interface AvatarProps {
  className: string;
  alt: string;
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, alt, src }) => {
  return <img className={className} alt={alt} src={src} />;
};

export default Avatar;
