import styled from '@emotion/styled';

export const Header = styled.header`
  font-size: 1.5rem;
  text-align: center;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 70vw;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
    max-width: 95vw;
  }
`;
