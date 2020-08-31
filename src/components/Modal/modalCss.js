import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 99%;
  background-color: rgba(229, 229, 229, 0.5);
`;

export const ModalContent = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 35vh;
  width: 50vw;
  max-width: 600px;
  margin: 15vh auto;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  background-color: #fff;

  & .body-label {
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
`;

export const BodyInput = styled.textarea`
  justify-self: stretch;
  width: 100%;
  height: 100%;
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
  background-color: #27cb2d;
  color: #fff;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  border-radius: 50%;

  & span {
    font-size: 1rem;
    line-height: 1rem;
  }
`;
