import s from './chatList.module.scss';
import Substrate from '../substrate/substrate';
import VerticalContainer from '../vertical-container/verticalContainer';
import DraggableContainer from '../draggable-container/draggableContainer';
import Typo from '../typo/typo';
import { useEffect, useState } from 'react';
import CircleAvatar from '../circle-avatar/circleAvatar';
import UploadPopup from '../upload-popup/uploadPopup';
import ChatElement from '../chat-element/chatElement';
export function ChatList() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [chatList, setChatList] = useState([]);
  useEffect(()=>{
    fetch('https://localhost:3001/mychats', {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json()).then((data) => {
      console.log(data);
      setChatList(data);
    })
  },[])
  return (
    <Substrate>
      <VerticalContainer>
        <DraggableContainer>
          {chatList.map((chat, index)=>{
            return (
              <ChatElement key={index} chat={chat} setIsPopupOpen={setIsPopupOpen}/>
            );
          })}
        </DraggableContainer>
        <UploadPopup
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          uploadAdress={'https://localhost:3001/upload'}
        />
      </VerticalContainer>
    </Substrate>
  );
}

export default ChatList;
