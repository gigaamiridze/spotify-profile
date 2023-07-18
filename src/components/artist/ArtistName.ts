import styled from 'styled-components';

const ArtistName = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 70px;
  font-weight: 900;
  letter-spacing: -0.025em;
`;

export default ArtistName;
