import s from './profile.module.scss';

import React from "react";
import Typo from '../typo/typo';
const UserProfile = () => {
  return (
    <div className={s.profileContainer}>
      <div className={s.imageSection}>
        <img src="/mnt/data/image.png" alt="User" className={s.profileImage} />
        <div className={s.timeDisplay}>
          <Typo  weight={400} size={15} color={'#FFFFFF'}>9:41</Typo>
        </div>
      </div>
      <div className={s.userInfo}>
        <h2 className={s.userName}>
          <Typo  weight={400} size={15} color={'#FFFFFF'}>Иван Иванов</Typo>
        </h2>
        <span className={s.userBadge}>
          <Typo  weight={400} size={15} color={'#2000B1'}>Сосед</Typo>
        </span>
      </div>
      <div className={s.aboutSection}>
        <h3 className={s.sectionTitle}>
          <Typo  weight={400} size={15} color={'#00000080'}>О себе</Typo>
        </h3>
        <p className={s.aboutText}>
          <Typo  weight={400} size={15} color={'#FFFFFF'}>Учусь в ИМТК на 3 курсе</Typo>
        </p>
        <h3 className={s.sectionTitle}>
          <Typo  weight={400} size={15} color={'#00000080'}>Предпочтения</Typo>
        </h3>
        <div className={s.preferences}>
          <span className={s.preferenceItem}>
            <Typo  weight={400} size={15} color={'#2000B1'}>Могу потратить 20 тыс</Typo>
          </span>
          <span className={s.preferenceItem}>
            <Typo  weight={400} size={15} color={'#2000B1'}>Ищу соседа</Typo>
          </span>
          <span className={s.preferenceItem}>
            <Typo  weight={400} size={15} color={'#2000B1'}>Хочу жить компанией</Typo>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
