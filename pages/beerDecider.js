import { useState } from 'react';
import styles from '../styles/Home.module.css';

import { bestBeerQuestions } from '../questions/surveyQuestions';
import beerDecider from '../questions/beerDecider';
import Results from '../components/results';

import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from '../styles/questionStyles';

export default function Beer() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const handleClick = (answer) => {
    setQuestionAnswers([...questionAnswers, answer]);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <main className={styles.main}>
      {questionNumber + 1 === bestBeerQuestions.length ? (
        <Results results={beerDecider(questionAnswers)} />
      ) : (
        <>
          <QuestionSection>
            <QuestionText>
              {bestBeerQuestions[questionNumber].question}
            </QuestionText>
          </QuestionSection>
          <AnswerSection>
            {bestBeerQuestions[questionNumber].answers.map((answer) => (
              <Button key={answer} onClick={() => handleClick(answer)}>
                <div>{answer}</div>
                <div>{beerDecider([...questionAnswers, answer]).length}</div>
              </Button>
            ))}
          </AnswerSection>
        </>
      )}
    </main>
  );
}
