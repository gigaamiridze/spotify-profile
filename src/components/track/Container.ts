import styled from 'styled-components';
import { Main } from '../shared';

export const TrackContainer = styled(Main)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;


export const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 40px;
`;
