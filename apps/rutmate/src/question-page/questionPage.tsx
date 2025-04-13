import styles from './questionPage.module.scss';
import { useContext, useState } from 'react';
import Typo from '../typo/typo';
import Substrate from '../substrate/substrate';
import VerticalContainer from '../vertical-container/verticalContainer';
import Button from '../button/button';
import Question from '../question/question';
import { UserContext } from '../app/app';
import { useNavigate } from 'react-router';
export const questions = [
  {
    question: "Есть ли у вас уже пара, с кем вы хотите снимать жилье?",
    options: ["Да", "Нет"],
    name: 'pair'
  },
  {
    question: "Со сколькими людьми вы планируете снимать жилье?",
    options: ["1", "2", "3 и более"],
    name: 'maxMates'
  },
  {
    question: "Какую сумму вы готовы потратить на съем жилья?",
    options: ["10-20 тыс. руб.", "20-40 тыс. руб.", "более 40 тыс. руб."],
    name: 'maxMoney'
  },
  {
    question: "Есть ли у вас уже вариант для съема жилья?",
    options: ["Да", "Нет"],
    name: 'possPlace'
  },
  {
    question: "Можете ли вы назвать себя чистюлей?",
    options: ["Не люблю убираться", "Отношусь нейтрально", "Помешан на чистоте"],
    name: 'cleanfulness'
  },
  {
    question: "Есть ли у вас домашние животные, с которыми планируете жить?",
    options: ["Нет, но к животным отношусь нейтрально", "Да", "Нет, отношусь негативно"],
    name: 'pets'
  },
  {
    question: "Употребляете ли вы алкоголь?",
    options: ["Нет, но отношусь к алкоголю нейтрально", "Да", "Нет, отношусь негативно"],
    name: 'alco'
  },
  {
    question: "Курите ли вы алкоголь?",
    options: ["Нет, но отношусь к курению нейтрально", "Да", "Нет, отношусь негативно"],
    name: 'smoke'
  }
];
export function QuestionPage() {
  const [switcher, setSwitcher] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Substrate>
      <VerticalContainer>
        {!switcher&& <div>
        <Typo marginBottom={50} weight={600} size={23} color={'#000000'}>Опрос</Typo>
        <Typo marginBottom={50} weight={400} size={14} color={'#000000'}>Пройдите опрос о ваших предпочтениях, а мы добавим эту информацию в вашу анкету</Typo>
        <Button onClick={()=>{setSwitcher(true)}}><Typo weight={600} size={18} color={'#FFFFFF'}>Продолжить</Typo></Button>
      </div>}
        {switcher && <><img src={'../../public/images/logo.svg'} /><Question question={questions[currentQuestion]} />
          <Button onClick={()=>{
            if(questions[currentQuestion].name=='smoke') {
              console.log(user.currentUser)
              fetch("https://localhost:3001/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(user.currentUser),
              })
                .then(response => response.json())
                .then((data) => {
                  navigate('/sign-in')
                  console.log(data);
                })
                .catch(error => console.error("Error:", error));
            }
            else {
              setCurrentQuestion(currentQuestion+1)
            }

          }} marginTop={50} height={56} width={325}>
            <Typo weight={600} size={18} color={'#FFFFFF'}>
              Следующий вопрос
            </Typo>
          </Button>
          {currentQuestion>0&& <Button onClick={()=>{setCurrentQuestion(currentQuestion-1)}} marginTop={50} height={56} width={325}>
            <Typo weight={600} size={18} color={'#FFFFFF'}>
              Предыдущий вопрос
            </Typo>
          </Button>}
          {currentQuestion>5&& <Button onClick={()=>{
            setCurrentQuestion(currentQuestion+1);
            user.setCurrentUser((prevState) => ({
              ...prevState,
              questions: {
                ...prevState.questions,
                [questions[currentQuestion].name]: '',
              },
            }));
          }} marginTop={50} height={56} width={325}>
            <Typo weight={600} size={18} color={'#FFFFFF'}>
              Пропустить вопрос
            </Typo>
          </Button>}
        </>
        }
      </VerticalContainer>
    </Substrate>

  );
}

export default QuestionPage;
