import { useState } from 'react';
import styles from '../styles/Home.module.css';

import {
  QuestionText,
  QuestionSection,
  AnswerSection
} from '../styles/questionStyles';

import { pairingQuestions } from '../questions/surveyQuestions';
import pairingDecider from '../questions/pairingDecider';
import Results from './Results';

export default function Pairing() {
  const [answers, setAnswers] = useState([]);
  const toggleAnswers = (answer, e) => {
    answers.includes(answer)
      ? setAnswers((answers) => answers.filter((a) => a !== answer))
      : setAnswers([...answers, answer]);
  };

  return (
    <main className={styles.main}>
      <>
        <QuestionSection>
          <QuestionText>{pairingQuestions.question}</QuestionText>
        </QuestionSection>
        <AnswerSection>
          {pairingQuestions.answers.map((answer) => (
            <label key={answer}>
              <input
                // should be a 'checked' property
                type='checkbox'
                value={answer}
                onChange={(e) => toggleAnswers(answer, e)}
                disabled={answers.length >= 3 && !answers.includes(answer)}
              />
              {answer}
            </label>
          ))}
        </AnswerSection>
      </>
    </main>
  );
}
