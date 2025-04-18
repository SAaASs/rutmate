import s from './tag.module.scss';
import React from 'react';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  isClickable?: boolean;
}
export function Tag({children, onClick, isClickable=false}: TagProps) {
  return (
    <div style={isClickable?{cursor: 'pointer'}:{}} onClick={onClick} className={s.tag}>
      {children}
    </div>
  );
}

export default Tag;
