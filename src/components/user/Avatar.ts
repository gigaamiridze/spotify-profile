import styled, { css } from 'styled-components';
import { IItemLayout } from '../../interfaces';

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NoAvatar = styled.div<IItemLayout>`
  ${({ isArtistContent, theme }) => css`
    border: 2px solid ${theme.colors.white};
    padding: ${isArtistContent ? 40 : 30}px;
  `}
  border-radius: 50%;

  svg {
    ${({ isArtistContent, theme }) => css`
      fill: ${theme.colors.white};
      width: ${isArtistContent ? 120 : 85}px;
    `}
    
    @media (max-width: 620px) {
      width: ${({ isArtistContent }) => isArtistContent ? 110 : 75}px;
    }

    @media (max-width: 480px) {
      width: ${({ isArtistContent }) => isArtistContent ? 95 : 60}px;
    }
  }

  @media (max-width: 320px) {
    padding: ${({ isArtistContent }) => isArtistContent ? 35 : 25}px;
  }
`;
