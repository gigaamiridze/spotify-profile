import styled from 'styled-components';
import { Main } from '../shared';

const PlaylistContainer = styled(Main)`
  display: flex;
  gap: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default PlaylistContainer;
