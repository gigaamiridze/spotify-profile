import styled, { css } from 'styled-components';
import Mask from './Mask';

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const ItemArtwork = styled.div`
  width: 50px;
  height: 50px;
  position: relative;

  &:hover {
    ${Mask} {
      opacity: 1;
    }
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
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