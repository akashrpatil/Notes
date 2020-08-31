import styled from '@emotion/styled';

export const NoteElement = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  width: 15rem;
  min-height: 7rem;
  transition: all 0.2s ease-in-out;

  & :hover {
    .buttons {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  -moz-transition-duration: 0.218s;
  transition-duration: 0.218s;
  -moz-transition-property: opacity;
  transition-property: opacity;
  -moz-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
`;

export const NoteButton = styled.div`
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.h4`
  padding: 0.7rem 0 1rem 0;
`;
