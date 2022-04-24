import styles from '../styles/Home.module.css';

import { QuestionText, QuestionSection, AnswerSection } from './questionStyles';

import { pairingQuestions } from '../questions/surveyQuestions';

console.log(pairingQuestions.answers);

export default function Pairing() {
  return (
    <main className={styles.main}>
      <>
        <QuestionSection>
          <QuestionText>{pairingQuestions.question}</QuestionText>
        </QuestionSection>
        <AnswerSection>
          {pairingQuestions.answers.map((answer) => (
            <label key={answer}>
              <input type='checkbox' value={answer} />
              {answer}
            </label>
          ))}
        </AnswerSection>
      </>
    </main>
  );
}
