import styled, { css } from 'styled-components';
import { IItemLayout } from '../../interfaces';

const Mask = styled.div<IItemLayout>`
  ${({ isArtistContent, theme }) => css`
    fill: ${theme.colors.white};
    transition: ${theme.transition};
    border-radius: ${isArtistContent ? 100 : 0}%;
  `}
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  svg {
    width: 25px;
  }
`;

export default Mask;