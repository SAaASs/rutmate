import s from './profile.module.scss';
import Substrate from '../substrate/substrate';
import VerticalContainer from '../vertical-container/verticalContainer';
import React from "react";
import Typo from '../typo/typo';
import Button from '../button/button';
import Tag from '../tag/tag';
const UserProfile = () => {
  return (
      <VerticalContainer>
        <img className={s.profile__pic} src={'../../public/images/profilePic.png'} alt="RutMate" />
        <Typo weight={700} size={32} color={'#FFFFFF'}>Иван Иванов</Typo>
        <Tag>Сосед</Tag>
      </VerticalContainer>
  );
};

export default UserProfile;
