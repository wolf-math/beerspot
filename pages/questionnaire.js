import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from '../styles/questionStyles';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Questionnaire() {
  const question = {
    question: 'What kind of experience are you looking for?',
    answers: [
      { survey: ['To Forget', '/wasted'] },
      { survey: ['To Eat With a Meal', '/pairing'] },
      { survey: ['To Drink the Best Beer', '/beerDecider'] }
    ]
  };

  return (
    <main className={styles.main}>
      <>
        <QuestionSection>
          <QuestionText>{question.question}</QuestionText>
        </QuestionSection>
        <AnswerSection>
          {question.answers.map((answer) => (
            <Link key={answer.survey[0]} href={answer.survey[1]} passHref>
              <Button>{answer.survey[0]}</Button>
            </Link>
          ))}
        </AnswerSection>
      </>
    </main>
  );
}
