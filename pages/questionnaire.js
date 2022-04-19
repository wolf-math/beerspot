import { useState } from 'react';
import { bestBeerQuestions, pairingQuestions } from '../questions/question';
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
  const surveys = ['To Forget', 'To Eat With a Meal', 'To Drink the Best Beer'];
  const [questionGroup, setQuestionGroup] = useState([
    {
      question: 'What kind of experience are you looking for?',
      answers: surveys
    }
  ]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

  const takeSurvey = (answer) => {
    switch (answer) {
      case 'To Eat With a Meal':
        setQuestionGroup(pairingQuestions);
        break;
      case 'To Drink the Best Beer':
        setQuestionGroup(bestBeerQuestions);
        break;
    }
  };

  const handleClick = (answer) => {
    if (surveys.includes(answer)) {
      takeSurvey(answer);
    } else if (questionGroup.length >= questionNumber + 1) {
      setAnswers([...answers, answer]);
      setQuestionNumber(questionNumber + 1);
    } else {
      console.log('work!');
    }
  };

  return (
    <main className={styles.main}>
      <>
        <QuestionSection>
          <QuestionText>{questionGroup[questionNumber].question}</QuestionText>
        </QuestionSection>
        <AnswerSection>
          {questionGroup[questionNumber].answers.map((answer) => (
            <Button key={answer} onClick={() => handleClick(answer)}>
              {answer}
            </Button>
          ))}
        </AnswerSection>
      </>
    </main>
  );
}
