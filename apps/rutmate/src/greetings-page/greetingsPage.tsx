import s from './greetingsPage.module.scss';
import Typo from '../typo/typo';
import Button from '../button/button';
import Substrate from '../substrate/substrate';
import VerticalContainer from '../vertical-container/verticalContainer';
export function GreetingsPage() {
  return (
    <Substrate>
      <VerticalContainer>
        <div className={s.logo}><img src={'../../public/images/logo.svg'} alt="RutMate" /></div>
        <div className={s.greetPic}><img src={'../../public/images/greet_image.svg'} alt="Greetings image" /></div>
        <Typo marginTop={80} marginBottom={25} color={'#000000'} size={24} weight={600}>Найди соседа-найди друга!</Typo>
        <Typo marginBottom={25} color={'#333333'} size={15} weight={400}>Присоединяйтесь к нам, чтобы найти
          идеального соседа.</Typo>
        <Button marginBottom={25}><Typo color={'#ffffff'} weight={600} size={18}>Войти</Typo></Button>
        <Typo marginBottom={25} color={'#000000'} size={14} weight={400}>Нет аккаунта?
          Зарегистрироваться</Typo>
      </VerticalContainer>
    </Substrate>
  );
}

export default GreetingsPage;
