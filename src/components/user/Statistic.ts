import styled from 'styled-components';

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 375px) {
    column-gap: 20px;
    margin-bottom: 30px;
  }
`;

export const Stat = styled.div`
  text-align: center;
`;
