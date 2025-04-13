import s from './circleAvatar.module.scss';
import React from 'react';
interface CircleAvatarProps {
  width: number;
  height: number;
  setIsPopupOpen: (isOpen: boolean) => void;
  src: string;
}
export function CircleAvatar({ width, height, setIsPopupOpen, src}: CircleAvatarProps) {
  return (
    <div onClick={() => {
      setIsPopupOpen(true)
    }} style={{width: width+'px', height: height+'px'}} className={s.myProfile__headImgWrap}>
      <img className={s.myProfile__headImg} src={src} />
      <div className={s.myProfile__overlay}></div>
    </div>
  );
}

export default CircleAvatar;
