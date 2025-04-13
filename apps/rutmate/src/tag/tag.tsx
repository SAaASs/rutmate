import s from './tag.module.scss';
import React from 'react';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export function Tag({children, onClick}: TagProps) {
  return (
    <div onClick={onClick} className={s.tag}>
      {children}
    </div>
  );
}

export default Tag;
