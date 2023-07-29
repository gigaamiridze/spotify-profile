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
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  #description {
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

export const RightContent = styled.div`
  flex-grow: 1;
`;
