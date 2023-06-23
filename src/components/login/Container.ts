import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.eerieBlack};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 80px;
`;

export default Container;