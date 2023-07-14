import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 80px;
  
  @media (max-width: 375px) {
    padding: 0 30px;
  }
  
  @media (max-width: 320px) {
    padding: 0 25px;
    row-gap: 70px;
  }
`;

export default Container;
