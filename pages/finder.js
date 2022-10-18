import Pairing from '../components/pairing';
import BeerChooser from '../components/beerChooser';
import Forget from '../components/forget';
import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from '../styles/questionStyles';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

export default function Finder() {
  const [survey, setSurvey] = useState('main');
  const question = {
    question: 'What kind of experience are you looking for?',
    answers: [
      { survey: ['To Drink the Best Beer', 'chooser'] },
      { survey: ['To Eat With a Meal', 'pairing'] },
      { survey: ['To Forget', 'forget'] }
    ]
  };

  const MainMenu = () => {
    return (
      <>
        <QuestionSection>
          <QuestionText>{question.question}</QuestionText>
        </QuestionSection>
        <AnswerSection>
          {question.answers.map((answer) => (
            <Button
              onClick={() => setSurvey(answer.survey[1])}
              key={answer.survey[1]}
            >
              {answer.survey[0]}
            </Button>
          ))}
        </AnswerSection>
      </>
    );
  };

  const Main = () => {
    switch (survey) {
      case 'main':
        return <MainMenu />;
      case 'pairing':
        return <Pairing />;
      case 'chooser':
        return <BeerChooser />;
      case 'forget':
        return <Forget />;
    }
  };

  return (
    <main className={styles.main}>
      <Main />
      <button onClick={() => setSurvey('main')}>Start Over</button>
      <button onClick={() => setSurvey('main')}>Home</button>
    </main>
  );
}
