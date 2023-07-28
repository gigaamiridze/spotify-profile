import styled from 'styled-components';

export const LeftContent = styled.div`
  width: 30%;
  max-width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  text-align: center;
  
  img {
    height: auto;
    margin-bottom: 8px;
  }
  
  #description {
    line-height: 1.4;
  }
`;

export const RightContent = styled.div`
  flex-grow: 1;
`;
