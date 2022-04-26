import styled from 'styled-components';

export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

export const QuestionText = styled.div`
  margin-bottom: 12px;
  text-align: center;
`;

export const AnswerSection = styled.div`
  max-width: 50rem;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  border: 5px solid #234668;
  margin: 5px;
  cursor: pointer;
`;
