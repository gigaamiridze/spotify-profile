import styled from 'styled-components';

const ArtistImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.coverShadow};
`;

export default ArtistImage;
