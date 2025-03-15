import s from './question.module.scss';
import Typo from '../typo/typo';
import Button from '../button/button';
import { useEffect } from 'react';
interface Question {
  question: string;
  options: string[];
}

interface QuestionProps {
  question: Question;
}

export function Question({ question }: QuestionProps) {
  useEffect(()=>{console.log(11)},[question])
  return (
    <div className={s.question}>
      <Typo marginBottom={75} weight={600} size={24} color={'#000000'}>{question.question}</Typo>
      <div className={s.question__options}>
        {question.options.map((option) => {return(<Button isOption backgroundColor={'#FFFFFF'}><Typo marginTop={10} marginBottom={10} weight={400} size={15} color={'#00000080'}>{option}</Typo></Button>)})}
      </div>

    </div>
  );
}

export default Question;
