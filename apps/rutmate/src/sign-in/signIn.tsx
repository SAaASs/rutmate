import s from './signIn.module.scss';
import { useState } from 'react';
import VerticalContainer from '../vertical-container/verticalContainer';
import Typo from '../typo/typo';
import Button from '../button/button';
import Input from '../input/input';
import Substrate from '../substrate/substrate';
import { UserContext } from '../app/app';
import { useContext } from 'react';
import { useNavigate } from "react-router";
export function SignIn() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const user = useContext(UserContext);
  return (
    <Substrate>
      <VerticalContainer>
        <div className={s.logo}><img src={'../../public/images/logo.svg'}></img></div>
        <Typo marginBottom={50} color={'#000000'} size={14} weight={400}>Введите логин и пароль от
          личного кабинета РУТ МИИТ</Typo>
        <Input store={[login, setLogin]} marginBottom={20} placeholder={'Введите логин'}></Input>
        <Input store={[password, setPassword]} marginBottom={40} placeholder={'Введите пароль'}></Input>
        <Button
          width={325}
          height={58}
          onClick={()=>{
          fetch("https://localhost:3001/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
              email: login,
              password: password,
            }),
          }).then((response: Response) => {
            if (response.ok) {
              fetch("https://localhost:3001/me", {
                method: "GET",
                credentials: "include", // и тут тоже!
              })
                .then((r) => r.json())
                .then((data) => {
                  user.setCurrentUser(data);
                  navigate('/me')
                });
            } else {
              console.log(response.json());
            }
          }).catch((er)=>{console.log('11111',er)})
          user.setCurrentUser((prevState) => ({
            ...prevState,
            email: login,
            password: password,
          }));
        }}><Typo weight={600} size={18} color={'#FFFFFF'}>Продолжить</Typo></Button>
        <Typo marginTop={250} color={'#000000'} size={14} weight={400}>Нет аккаунта? <span onClick={()=>{navigate('/sign-up')}} style={{color: '#ED4D00', cursor: 'pointer'}}>Зарегистрироваться</span></Typo>
      </VerticalContainer>
    </Substrate>
  );
}

export default SignIn;
