import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 80px;

  @media (max-width: 1200px) {
    padding: 60px 50px;
  }

  @media (max-width: 768px) {
    padding: 50px 40px;
  }

  @media (max-width: 480px) {
    padding: 30px 25px;
  }
`;

export default Main;
