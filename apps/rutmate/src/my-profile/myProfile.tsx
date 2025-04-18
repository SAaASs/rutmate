import s from './myProfile.module.scss';
import Typo from '../typo/typo';
import VerticalContainer from '../vertical-container/verticalContainer';
import { useContext, useState } from 'react';
import { UserContext } from '../app/app';
import Substrate from '../substrate/substrate';
import { questions } from '../question-page/questionPage';
import Tag from '../tag/tag';
import UploadPopup from '../upload-popup/uploadPopup';
import CircleAvatar from '../circle-avatar/circleAvatar';
import NavBar from '../nav-bar/navBar';
export function MyProfile() {
  const user = useContext(UserContext);
  console.log('getting user in myProfile ', user)
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <Substrate>
      <VerticalContainer overflow={'scroll'}>
        <Typo marginBottom={20} marginTop={25} weight={700} size={24} color={"#000000"}>Мой профиль</Typo>
        <div className={s.myProfile}>
          <div className={s.myProfile__head}>
            <CircleAvatar width={113} height={113} setIsPopupOpen={setIsPopupOpen} src={`https://localhost:3001/image/${user.currentUser.avatar}`}></CircleAvatar>
            <Typo weight={600} size={24} color={'#000000'}>{user.currentUser.name}</Typo>
          </div>
          {
            Object.keys(user.currentUser.questions).map((question: string, index:number) => (
              <div key={index} className={s.characteristic}>
                <div className={s.characteristic__border}>
                  <Typo textAlign={'left'} marginBottom={3} weight={500} size={18} color={'#00000080'}>{questions[index].question}</Typo>
                </div>
                <Tag><Typo marginBottom={8} marginTop={8} marginRight={10} marginLeft={10} weight={600} size={13}
                           color={'#2000B1'}>{ user.currentUser.questions[question]}</Typo></Tag>
              </div>
            ))
          }


        </div>
        <UploadPopup
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          uploadAdress={'https://localhost:3001/upload'}
        />
        <NavBar/>
      </VerticalContainer>

    </Substrate>

  );
}

export default MyProfile;
