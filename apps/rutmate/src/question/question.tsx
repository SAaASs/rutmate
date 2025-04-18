import s from './question.module.scss';
import Typo from '../typo/typo';
import Button from '../button/button';
import { use, useEffect } from 'react';
import { UserContext } from '../app/app';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
interface Question {
  question: string;
  options: string[];
  name: string;
}

interface QuestionProps {
  question: Question;
}

export function Question({ question }: QuestionProps) {
  useEffect(()=>{console.log(11)},[question])
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className={s.question}>
      <Typo marginBottom={75} weight={600} size={24} color={'#000000'}>{question.question?question.question:''}</Typo>
      <div className={s.question__options}>
        {question.options.map((option,index) => {return(<Button onClick={()=>{
          user.setCurrentUser((prevState) => ({
            ...prevState,
            questions: {
              ...prevState.questions,
              [question.name]: option,
            },
          }));
        }} isOption backgroundColor={'#FFFFFF'} borderColor={user.currentUser.questions[question.name]==option?"#2000B1":'#FFFFFF'} ><Typo marginTop={10} marginBottom={10} weight={400} size={15} color={user.currentUser.questions[question.name]==option?"#2000B1":'#00000080'}>{option}</Typo></Button>)})}
      </div>
    </div>
  );
}

export default Question;
