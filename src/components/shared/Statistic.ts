import styled from 'styled-components';
import { IItemLayout } from '../../interfaces';

export const Stats = styled.div<IItemLayout>`
  display: flex;
  align-items: flex-start;
  column-gap: ${({ isArtistContent }) => isArtistContent ? 50 : 30}px;
  
  @media (max-width: 375px) {
    column-gap: ${({ isArtistContent }) => isArtistContent ? 40 : 20}px;
  }
`;

export const Stat = styled.div`
  text-align: center;
`;
