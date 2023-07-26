import styled from 'styled-components';
import { Main } from '../shared';

const ArtistContainer = styled(Main)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 35px;

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 60px);
  }
`;

export default ArtistContainer;
