import s from './chatElement.module.scss';
import CircleAvatar from '../circle-avatar/circleAvatar';
import Typo from '../typo/typo';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../app/app';
interface ChatElementProps {
  chat: any
  setIsPopupOpen: (isOpen: boolean) => void;
}
export function ChatElement({chat, setIsPopupOpen}: ChatElementProps) {
  const  user = useContext(UserContext);
  console.log('user in chatElement',user)
  const navigate = useNavigate();
  const [isDataReady, setIsDataReady] = useState(false);
  const [chatInfo, setChatInfo] = useState(
    {message: '',
      name:'',
      pic: ''
    }
  );
  useEffect(()=>{
    if (!user.currentUser._id) return;
    fetch(`https://localhost:3001/getlastmessage?chatId=${chat._id}`,
      {
        method: 'GET',
        credentials: 'include',
      }).then((res)=>res.json()).then((data)=>{console.log(data); setChatInfo((prevState) => ({
      ...prevState,
      message: data,
    }))})
    let companionId = '';
    if (chat.type=='direct') {
      companionId = chat.members.find(
        memberId => memberId.toString() !== user.currentUser._id.toString()
      );
      fetch(`https://localhost:3001/user/${companionId}`, {
        method: "GET",
        credentials: "include", // и тут тоже!
      })
        .then((r) => r.json())
        .then((data) => {
          setChatInfo((prevState) => ({
            ...prevState,
            name: data.name,
            pic: data.avatar,
          }))
        }).then(()=> {
          console.log('chatInfo',chatInfo)
          console.log('chat',chat)
        setIsDataReady(true);
      })
    }
  },[user.currentUser._id])
  if (!isDataReady || !user.currentUser._id) return null;
  return (
    <div className={s.chatElementList}>
      <div onClick={()=>{navigate(`/chat/${chat._id}`)}} className={s.chatElement}>
        <CircleAvatar width={56} height={56} setIsPopupOpen={setIsPopupOpen} src={chat.avatar ? chat.avatar : `https://localhost:3001/image/${chatInfo.pic}`}></CircleAvatar>
        <div className={s.chatElement__textWrap}>
          <Typo weight={600} size={18} color={'#000000'}>{chat.title ? chat.title : chatInfo.name}</Typo>
          {chatInfo.message.content&&<Typo textAlign={'start'} weight={400} size={14} color={'#000000'}>{chatInfo.message.content.text}</Typo>}
        </div>
        <div className={s.chatElement__statusWrap}>
          <div className={s.chatElement__indicator}></div>
          {chatInfo.message.createdAt&&<Typo weight={400} size={14} color={'#00000080'}>{chatInfo.message.createdAt}</Typo>}
        </div>
      </div>
    </div>
  );
}

export default ChatElement;
