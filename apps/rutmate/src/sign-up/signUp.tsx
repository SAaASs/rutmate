import s from './signUp.module.scss';
import { useState } from 'react';
import VerticalContainer from '../vertical-container/verticalContainer';
import Typo from '../typo/typo';
import Button from '../button/button';
import Input from '../input/input';
import Substrate from '../substrate/substrate';
import { UserContext } from '../app/app';
import { useContext } from 'react';
import { useNavigate } from "react-router";
export function SignUp() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const user = useContext(UserContext);
  return (
    <Substrate>
      <VerticalContainer>
        <div className={s.logo}><img src={'../../public/images/logo.svg'}></img></div>
        <Typo marginBottom={50} color={'#000000'} size={14} weight={400}>Введите логин и пароль от
          личного кабинета РУТ МИИТ</Typo>
        <Input store={[login, setLogin]} marginBottom={20} placeholder={'Введите логин'}></Input>
        <Input store={[password, setPassword]} marginBottom={20} placeholder={'Введите пароль'}></Input>
        <Input store={[name, setName]} marginBottom={20} placeholder={'Введите имя'}></Input>
        <Input store={[lastName, setLastName]} marginBottom={40} placeholder={'Введите фамилию'}></Input>
        <Button
          width={325}
          height={58}
          onClick={()=>{
          user.setCurrentUser((prevState) => ({
            ...prevState,
            name: name,
            lastName: lastName,
            email: login,
            password: password,
          }));
          navigate('/questions?mode=reg');
        }}><Typo weight={600} size={18} color={'#FFFFFF'}>Продолжить</Typo></Button>
        <Typo marginTop={250} color={'#000000'} size={14} weight={400}>Уже есть аккаунт? <span style={{cursor: 'pointer', color: '#ED4D00'}} onClick={()=>{navigate('/sign-in')}} >Войти</span> </Typo>
      </VerticalContainer>
    </Substrate>
  );
}

export default SignUp;
