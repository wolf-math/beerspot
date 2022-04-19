import { useState } from 'react';
import questions from '../questions/question';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const QuestionSection = styled.div`
  /* width: 100%; */
  /* position: relative; */
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
  text-align: center;
`;

const AnswerSection = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  margin: 5px;
  cursor: pointer;
`;

export default function Questionnaire() {
  const [questionSection, setQuestionSection] = useState({
    question: 'What kind of experience are you looking for?',
    answers: ['To Forget', 'To Eat With a Meal', 'To Drink the Best Beer']
  });
  const [ansers, setAnswers] = useState([]);

  return (
    <main className={styles.main}>
      <QuestionSection>
        <QuestionText>{questionSection.question}</QuestionText>
      </QuestionSection>
      <AnswerSection>
        {questionSection.answers.map((answer) => {
          <Button>{answer}</Button>;
        })}
      </AnswerSection>
    </main>
  );
}
