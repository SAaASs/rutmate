import s from './Settings.module.scss';
import Substrate from '../substrate/substrate';
import VerticalContainer from '../vertical-container/verticalContainer';
import Button from '../button/button';
import Typo from '../typo/typo';
import { useContext, useState } from 'react';
import { UserContext } from '../app/app';
import { useNavigate } from 'react-router';
export function Settings() {
  const navigate = useNavigate();
  const  user  = useContext(UserContext);
  const [curentAction, setCurentAction] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleAction = () => {
    console.log(curentAction)
    if (curentAction === 'logout') {
      fetch("https://localhost:3001/logout", {
        method: "POST",
        credentials: "include",
      }).then(()=>{navigate("/sign-in")})
    }
    if (curentAction === 'kys') {
      fetch("https://localhost:3001/kys", {
        method: "POST",
        credentials: "include",
      }).then(()=>{navigate("/sign-up")})
    }
  }
  return (
    <Substrate>
      <VerticalContainer>
        <Button marginTop={100} marginBottom={20} onClick={()=>{
          setCurentAction('logout');
          setIsOpen(true);
        }}>
          <Typo marginLeft={5} marginRight={5} marginBottom={10} marginTop={10} weight={600} size={18} color={'#FFFFFF'}>Выйти из аккаунта</Typo>
        </Button>
        <Button onClick={()=>{
          setCurentAction('kys');
          setIsOpen(true);
        }} marginBottom={20}>
          <Typo marginLeft={5} marginRight={5} marginBottom={10} marginTop={10} weight={600} size={18} color={'#FFFFFF'}>Деактивировать аккаунт</Typo>
        </Button>
        <Button onClick={()=>{navigate('/questions?mode=edit')}} marginBottom={20}>
          <Typo marginLeft={5} marginRight={5} marginBottom={10} marginTop={10} weight={600} size={18} color={'#FFFFFF'}>Редактировать аккаунт</Typo>
        </Button>
        {isOpen && <div className={s.modalBackdrop}>
          <div className={s.modal}>
            <Typo weight={600} size={24} color={'#000000'}>Вы уверны?</Typo>
            <div className={s.surePopup__ansWrap}>
              <Button onClick={handleAction} marginBottom={20}>
                <Typo marginLeft={5} marginRight={5} marginBottom={10} marginTop={10} weight={600} size={18}
                      color={'#FFFFFF'}>Да</Typo>
              </Button>
              <Button onClick={()=>{setIsOpen(false)}} marginBottom={20}>
                <Typo marginLeft={5} marginRight={5} marginBottom={10} marginTop={10} weight={600} size={18}
                      color={'#FFFFFF'}>Нет</Typo>
              </Button>
            </div>
          </div>
        </div>}

      </VerticalContainer>
    </Substrate>
  );
}

export default Settings;
