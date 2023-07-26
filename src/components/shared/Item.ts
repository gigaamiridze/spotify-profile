import styled, { css } from 'styled-components';
import { IItemLayout } from '../../interfaces';
import Mask from './Mask';

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  
  @media (max-width: 768px) {
    row-gap: 20px;
  }
`;

export const Item = styled.li<IItemLayout>`
  ${({ isArtistContent, isTopArtistsContent }) => css`
    display: ${isArtistContent ? 'flex' : 'grid'};
    flex-direction: ${isTopArtistsContent && 'column'};
  `}
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 20px;

  &:hover {
    ${Mask} {
      opacity: 1;
    }
  }
`;

export const ItemArtwork = styled.div<IItemLayout>`
  ${({ isArtistContent }) => css`
    width: ${isArtistContent ? 200 : 50}px;
    height: ${isArtistContent ? 200 : 50}px;
  `}
  position: relative;
`;

export const ItemImage = styled.img<IItemLayout>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ isArtistContent }) => isArtistContent ? 100 : 0}%;
`;

export const ItemMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ItemName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transition: ${theme.transition};
  `}
  font-size: 16px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ItemGreyTitle = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
`;
