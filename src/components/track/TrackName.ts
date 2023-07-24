import styled from 'styled-components';

const TrackName = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 900;
  line-height: 42px;
  
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (max-width: 375px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export default TrackName;
