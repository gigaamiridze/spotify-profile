import styled from 'styled-components';

const ArtistName = styled.h3`
  color: ${({ theme }) => theme.colors.lightestGrey};
  font-size: 23px;
  font-weight: 700;
  line-height: 25px;
  
  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 22px;
  }
  
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export default ArtistName;
