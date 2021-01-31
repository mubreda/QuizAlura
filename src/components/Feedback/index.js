/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 24px 0;
  &[data-is-correct='true'] {
    background-color: ${({ theme }) => theme.colors.success};
  }
  &[data-is-correct='false'] {
    background-color: ${({ theme }) => theme.colors.wrong};
  }
`;

export const WrongAnswer = styled.p`
   color: ${({ theme }) => theme.colors.contrastText};
`;

export const CorrectAnswer = styled.p`
   color: ${({ theme }) => theme.colors.contrastText};
`;
