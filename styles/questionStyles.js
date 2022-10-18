import styled from 'styled-components';

export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

export const QuestionText = styled.div`
  margin-bottom: 12px;
  text-align: center;
  color: #d4ccce;
  font-size: 2rem;
`;

export const AnswerSection = styled.div`
  max-width: 50rem;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #d4ccce;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  max-width: 100%;
  min-width: 300px;
  margin: 3px auto;
  padding: 5px;
  background-color: #7c3f04;
  color: #d4ccce;
  border-color: #d4ccce;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;

  p {
    margin: 0 0 0 0;
    color: #d4ccce;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #342404;
    border-color: #fbf0b7;
    transition: 0.5s;

    p {
      color: #fbf0b7;
      transition: 0.5s;
    }
  }
`;
