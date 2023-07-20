import styled from 'styled-components';

const ArtistImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.coverShadow};

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }
`;

export default ArtistImage;
