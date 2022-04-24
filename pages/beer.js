import { useState } from 'react';
import styles from '../styles/Home.module.css';

import { bestBeerQuestions } from '../questions/surveyQuestions';
import beerDecider from '../questions/beerDecider';

import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from './questionStyles';

export default function Beer() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const handleClick = (answer) => {
    setQuestionAnswers([...questionAnswers, answer]);
    questionNumber + 1 < bestBeerQuestions.length
      ? setQuestionNumber(questionNumber + 1)
      : console.log(beerDecider(questionAnswers));
  };

  return (
    <main className={styles.main}>
      <>
        <QuestionSection>
          <QuestionText>
            {bestBeerQuestions[questionNumber].question}
          </QuestionText>
        </QuestionSection>
        <AnswerSection>
          {bestBeerQuestions[questionNumber].answers.map((answer) => (
            <Button key={answer} onClick={() => handleClick(answer)}>
              {answer}
            </Button>
          ))}
        </AnswerSection>
      </>
    </main>
  );
}
