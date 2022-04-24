import { useState } from 'react';
import styles from '../styles/Home.module.css';

import { bestBeerQuestions } from '../questions/surveyQuestions';

import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from './questionStyles';

// don't render next question until prev is answered

export default function Beer() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const handleClick = (answer) => {
    setQuestionAnswers([...questionAnswers, answer]);
    setQuestionNumber(questionNumber + 1);
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
