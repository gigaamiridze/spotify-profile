import styled from 'styled-components';

export const LeftContent = styled.div`
  width: 30%;
  max-width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  text-align: center;
  
  img {
    height: auto;
  }
`;

export const RightContent = styled.div`
  flex-grow: 1;
`;
