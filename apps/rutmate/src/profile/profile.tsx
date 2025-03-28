import s from './profile.module.scss';
import VerticalContainer from '../vertical-container/verticalContainer';
import React, { useContext } from 'react';
import Typo from '../typo/typo';
import Button from '../button/button';
import draggableContainer, { DraggableContainer } from '../draggable-container/draggableContainer';
import Tag from '../tag/tag';
import { UserContext } from '../app/app';
const UserProfile = () => {
  const user = useContext(UserContext);
  console.log(user)
  return (
      <VerticalContainer>
        <img className={s.profile__pic} src={'../../public/images/profilePic.png'} alt="RutMate" />
        <div className={s.backButtonWrap}>
          <Button marginTop={20}  borderColor={'#FFFFFF90'} backgroundColor={'transparent'} standart={false} iconOnly><img src="../../public/images/Icon.svg"/></Button>
        </div>
        <Typo marginTop={280} weight={700} size={32} color={'#FFFFFF'}>Иван Иванов</Typo>
        <Tag>Сосед</Tag>
        <DraggableContainer>
          <Typo weight={400} size={16} color={"#22172A10"}>О себе</Typo>
          <Typo marginBottom={40} weight={500} size={16} color={"#22172A10"}>Учусь в ИМТК на 3 курсе</Typo>
          <Typo weight={400} size={16} color={"#22172A10"}>Предпочтения</Typo>
          <div className={s.profile__tags}>
            {Object.keys(user.currentUser.questions).map(key => (
              <Tag key={key}>{user.currentUser.questions[key]}</Tag>
            ))}
          </div>
        </DraggableContainer>
      </VerticalContainer>
  );
};

export default UserProfile;
