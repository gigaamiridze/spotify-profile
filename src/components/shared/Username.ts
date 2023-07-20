import styled, { css } from 'styled-components';
import { IItemLayout } from '../../interfaces';

const Username = styled.h2<IItemLayout>`
  ${({ isArtistContent, theme }) => css`
    color: ${theme.colors.white};
    font-size: ${isArtistContent ? 60 : 50}px;
    font-weight: ${isArtistContent ? 900 : 700};
    letter-spacing: ${isArtistContent && '-0.025em'};
    transition: ${!isArtistContent && theme.transition};
  `}

  &:hover {
    color: ${({ isArtistContent, theme }) => !isArtistContent && theme.colors.lightGreen};
  }
  
  @media (max-width: 768px) {
    font-size: ${({ isArtistContent }) => isArtistContent ? '6.9vw' : '7.7vw'};
  }
`;

export default Username;
