import s from './profile.module.scss';
import VerticalContainer from '../vertical-container/verticalContainer';
import React, { useContext, useEffect, useState } from 'react';
import Typo from '../typo/typo';
import Button from '../button/button';
import { DraggableContainer } from '../draggable-container/draggableContainer';
import Tag from '../tag/tag';
import { useParams } from 'react-router';
import { UserContext } from '../app/app';
import { useNavigate } from 'react-router';

const UserProfile = () => {
  const { id } = useParams();
  const [otherUser, setOtherUser] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {

    fetch(`https://localhost:3001/user/${id}`, {
      method: "GET",
      credentials: "include", // и тут тоже!
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setOtherUser(data);
      });
  }, [id]);
  return (
      otherUser!=null&&<VerticalContainer>
        <img className={s.profile__pic} src={otherUser.avatar?`https://localhost:3001/image/${otherUser.avatar}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s'} alt="RutMate" />
        <div className={s.backButtonWrap}>
          <Button marginTop={20}  borderColor={'#FFFFFF90'} backgroundColor={'transparent'} standart={false} iconOnly><img src="../../public/images/Icon.svg"/></Button>
        </div>
        <div className={s.profile__name}>{otherUser.name} {otherUser.lastName}</div>
        <Tag isClickable onClick={()=>{
          fetch(`https://localhost:3001/checkchat?firstUser=${otherUser._id}&secondUser=${user.currentUser._id}`, {credentials: 'include'}).then((r) => r.json()).then((data) => {navigate(`/chat/${data}`)})
        }} > <Typo marginBottom={5} marginTop={5} marginLeft={5} marginRight={5} weight={500} size={16} color={'#2000B1'}>Написать</Typo> </Tag>
        <DraggableContainer>
          <div className={s.wrap}>
            <Typo weight={400} size={16} color={"#22172A80"}>О себе</Typo>
            <Typo marginBottom={40} weight={500} size={16} color={"#22172A80"}>Учусь в ИМТК на 3 курсе</Typo>
            <Typo marginBottom={15} weight={400} size={16} color={"#22172A80"}>Предпочтения</Typo>
            <div className={s.profile__tags}>
              {Object.keys(otherUser.questions).map(key => (
                <Tag key={key}>
                  <Typo marginTop={12} marginBottom={12} marginLeft={12} marginRight={12} weight={500} size={16} color={"#2000B1"}>
                    {otherUser.questions[key]}
                  </Typo>
                </Tag>
              ))}
            </div>
          </div>
        </DraggableContainer>
      </VerticalContainer>
  );
};

export default UserProfile;
