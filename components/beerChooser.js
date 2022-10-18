import { useState } from 'react';
import { bestBeerQuestions } from '../questions/surveyQuestions';
import beerDeciderQuestions from '../questions/beerDecider';
import Results from './Results';

import {
  QuestionText,
  QuestionSection,
  AnswerSection,
  Button
} from '../styles/questionStyles';

export default function BeerChooser() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const handleClick = (answer) => {
    setQuestionAnswers([...questionAnswers, answer]);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      {questionNumber + 1 === bestBeerQuestions.length ? (
        <Results results={beerDeciderQuestions(questionAnswers)} />
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
                <p>{answer}</p>
                <div>
                  {beerDeciderQuestions([...questionAnswers, answer]).length}
                </div>
              </Button>
            ))}
          </AnswerSection>
          {/* I may leave the results here in the future */}
          {/* <Results results={beerDecider(questionAnswers)} /> */}
        </>
      )}
    </>
  );
}
