import s from './chat.module.scss';
import { VerticalContainer } from '../vertical-container/verticalContainer';
import Substrate from '../substrate/substrate';
import { useEffect, useState } from 'react';
import CircleAvatar from '../circle-avatar/circleAvatar';
import UploadPopup from '../upload-popup/uploadPopup';
import { io } from 'socket.io-client';
import Typo from '../typo/typo';
import Button from '../button/button';
import { useNavigate, useParams } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../app/app';
import Input from '../input/input';
const socket = io('https://localhost:3001', { withCredentials: true });
export function Chat() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = useContext(UserContext);

  const navigate = useNavigate();
  const [isDataReady, setIsDataReady] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [chatInfo, setChatInfo] = useState(
    {
      name:'',
      pic: ''
    }
  );

  const { id } = useParams();
  useEffect(() => {
    socket.emit('joinRoom', id);
  }, [id]);

  useEffect(()=>{
    if (!user.currentUser._id) return;
    fetch(`https://localhost:3001/chat/${id}`, {
      method: 'GET',
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        setChat(data.chat);
        setMessages(data.messages);

        let companionId = '';
        if (data.chat.type === 'direct') {
          companionId = data.chat.members.find(
            memberId => memberId.toString() !== user.currentUser._id.toString()
          );
          fetch(`https://localhost:3001/user/${companionId}`, {
            method: "GET",
            credentials: "include",
          })
            .then((r) => r.json())
            .then((userData) => {
              setChatInfo((prevState) => ({
                ...prevState,
                name: userData.name,
                pic: userData.avatar,
              }));
            }).then(()=> {
            console.log('chatInfo',chatInfo)
            console.log('chat',chat)
            setIsDataReady(true);
          })
        }
      });



  },[user.currentUser._id])
  useEffect(() => {
    if (!chat) return;

    console.log('📩 Отправка joinChat:', chat._id);
    socket.emit('joinChat', chat._id); // очень важно!

    socket.on('receiveMessage', (newMsg) => {
      console.log('💬 Получено сообщение через сокет:', newMsg);
      setMessages(prev => [newMsg, ...prev]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [chat]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    socket.emit('sendMessage', {
      chatId: chat._id,
      text: newMessage,
    });

    setNewMessage('');
  };

  if (!isDataReady || !user.currentUser._id) return null;
  return (
    <Substrate>
      <VerticalContainer>
        <div className={s.chat__wrap}>
          <div className={s.chat__header}>
            <Button onClick={()=>{navigate('/chats')}} backgroundColor={'transparent'} standart={false} iconOnly><img
              src={'../../public/images/weui_arrow-filled.svg'} /></Button>
            <CircleAvatar width={71} height={71} setIsPopupOpen={setIsPopupOpen}
                          src={`https://localhost:3001/image/${chatInfo.pic}`} />
            <Typo weight={400} size={24} color={'#000000'}>{chat?.title ? chat.title : chatInfo.name}</Typo>
            <Button backgroundColor={'transparent'} iconOnly><img src={'../../public/images/hugeicons_complaint.svg'} /></Button>
          </div>
          <div className={s.chat__messageList}>
            {messages?.map((message) => (
              <div key={message._id} style={{
                justifyContent: message.sender === user.currentUser._id ? 'flex-end' : 'flex-start',
              }} className={s.chat__messageWrap}>
                <div style={{
                  backgroundColor: message.sender === user.currentUser._id ? '#8F80D82E' : '#FFFFFF',
                }} className={s.chat__message}>
                  <Typo
                    marginRight={12}
                    marginLeft={12}
                    marginTop={12}
                    marginBottom={6}
                    weight={400}
                    size={15}
                    color={'#00000080'}
                  >
                    {message.content.text}
                  </Typo>
                </div>
              </div>
            ))}
          </div>
          <div className={s.chat__sender}>
            <Input width={306} height={39} store={[newMessage,setNewMessage]}/>
            <Button onClick={handleSendMessage} backgroundColor={'transparent'} standart={false} iconOnly><img
              src={'../../public/images/wpf_sent.svg'} /></Button>
          </div>
        </div>

      </VerticalContainer>
      <UploadPopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        uploadAdress={'https://localhost:3001/upload'}
      />
    </Substrate>
  );
}

export default Chat;
