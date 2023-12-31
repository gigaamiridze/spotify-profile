import styled from 'styled-components';

const RecommendationsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export default RecommendationsHeader;
