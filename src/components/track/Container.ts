import styled from 'styled-components';
import { Main } from '../shared';

export const TrackContainer = styled(Main)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  
  @media (max-width: 480px) {
    row-gap: 50px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 40px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    column-gap: 0;
    row-gap: 30px;
  }
`;
