import styled from '@emotion/styled';

export const FormContainer = styled.div`
  justify-self: center;
  margin: 2rem auto;
  width: 40vw;
  max-width: 400px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const FormElement = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);

  & .buttonContainer {
    text-align: right;
  }
`;

export const NoteTitle = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
`;

export const NoteBody = styled.textarea`
  min-height: 4rem;
  width: 100%;
  padding: 0.5rem;
  border: none;
  resize: none;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  right: 1.1rem;
  bottom: -1.1rem;
  cursor: pointer;
  color: #2c2c2c;
  border-radius: 50%;
  background-color: #3586e4;
  color: #fff;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);

  & span {
    font-size: 1.3rem;
    line-height: 1.3rem;
  }
`;
