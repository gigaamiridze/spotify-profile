import styled, { css } from 'styled-components';
import { IItemLayout } from '../../interfaces';

export const Number = styled.span<IItemLayout>`
  ${({ isArtistContent, theme }) => css`
    color: ${isArtistContent ? theme.colors.blue : theme.colors.green};
    font-size: ${isArtistContent ? 'clamp(19px, 2.8vw, 24px)' : 'clamp(19px, 5.8vw, 20px)'};
    line-height: ${isArtistContent && '24px'};
    text-transform: ${isArtistContent && 'capitalize'};
  `}
  font-weight: 700;
`;

export const NumLabel = styled.h5`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: clamp(11px, 3.5vw, 12px);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 10px;
`;
