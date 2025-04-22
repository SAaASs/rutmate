import s from './userList.module.scss';
import VerticalContainer from '../vertical-container/verticalContainer';
import Typo from '../typo/typo';
import { useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router';
import NavBar from '../nav-bar/navBar';
import Input from '../input/input';
import { questions } from '../question-page/questionPage';
import Button from '../button/button';
export function UserList() {
  const navigate = useNavigate();
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [answers, setAnswers] = useState({});
  const [userList, setUserList] = useState()
  useEffect(()=>{
    fetch('https://localhost:3001/users/all', {
      method: 'GET',
      credentials: 'include',
    }).then((res)=>{return  res.json()}).then(data => {
      console.log(data);
      setUserList(data);
    })
  },[])
  const handleSelectChange = (questionName, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionName]: value
    }));
  };
  return (
      userList!=undefined&& <VerticalContainer>


        <div className={s.titleWrap}>
          <Typo weight={700} size={24} color={"#000000"}>Анкеты</Typo>
          <Button backgroundColor={'transparent'} onClick={()=>{setIsPopupOpened(true)}} iconOnly><img src={'../../public/images/filterIcon.svg'} /></Button>
        </div>
        <div className={s.grid}>
          {userList.map((leUser: object, index: number) => {
            return (
              <div key={index} className={s.card} onClick={() => {
                navigate('/user/' + leUser._id);
              }}>
                <div className={s.imageWrapper}>
                  <img
                    src={leUser.avatar ? `https://localhost:3001/image/${leUser.avatar}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s'}
                    alt="avatar" />
                </div>
                <div className={s.match}>94% Match</div>
                <div className={s.name}>{leUser.name}</div>
              </div>
            );
          })}
        </div>
        <NavBar />

        {isPopupOpened && <div className={s.popupOverlay}>
          <div className={s.popup}>
            <Typo marginBottom={20} weight={600} size={24} color={'#000000'}>
              Настройте фильтры поиска
            </Typo>

            {questions.map((question, index) => {
              return (
                <div key={index} className={s.question}>
                  <label>{question.question}</label>
                  <select
                    id={question.name}
                    value={answers[question.name] || ''}
                    onChange={(e) => handleSelectChange(question.name, e.target.value)}
                  >
                    <option value="" disabled>Выберите</option>
                    {question.options.map((opt, index) => (
                      <option key={index} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}

            <div className={s.popupButtons}>
              <Button onClick={() => {
                setIsPopupOpened(false);
                setAnswers({});
              }}>
                <Typo weight={600} size={18} color={'#FFFFFF'}>
                  Отменить
                </Typo>
              </Button>
              <Button onClick={() => {
                console.log('Выбранные фильтры:', answers);
                fetch('https://localhost:3001/users/filtered',{
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(
                     answers
                  )
                }).then((res)=>{console.log(res);return res.json()}).then((data)=>{setUserList(data); setIsPopupOpened(false)})
              }}>
                <Typo weight={600} size={18} color={'#FFFFFF'}>
                  Отправить
                </Typo>
              </Button>
            </div>
          </div>
        </div>}

      </VerticalContainer>
  );
}

export default UserList;
