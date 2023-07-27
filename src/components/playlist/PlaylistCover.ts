import styled from 'styled-components';
import { Mask } from '../shared';

const PlaylistCover = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => theme.coverShadow};
  
  &:hover {
    ${Mask} {
      opacity: 1;
    }
  }
`;

export default PlaylistCover;
