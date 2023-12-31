import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding-left: 100px;
  
  @media (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 70px;
  }

  @media (max-width: 375px) {
    padding-bottom: 60px;
  }
`;

export default ContentWrapper;
