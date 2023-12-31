import styled from 'styled-components';

const PlaylistName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

export default PlaylistName;
