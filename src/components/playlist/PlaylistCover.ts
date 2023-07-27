import styled from 'styled-components';

const PlaylistCover = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => theme.coverShadow};
`;

export default PlaylistCover;
