import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 13px;
  padding-top: 5px;
  
  @media (max-width: 768px) {
    row-gap: 12px;
    padding-top: 0;
  }

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
  }
`;

export default Info;
