import styled from '@emotion/styled';

export const TitleElement = styled.h1`
  font-size: 4rem;
  @media (max-width: 600px) {
    font-size: 3rem;
    margin-top: 0.5rem;

    & img {
      width: 3rem;
      height: 100%;
    }
  }
`;
