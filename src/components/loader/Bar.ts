import styled, { css, keyframes } from 'styled-components';
import { IBarProps } from '../../interfaces';

const dance = keyframes`
  from {
    height: 10px;
  }
  to {
    height: 100%;
  }
`;

const Bar = styled.div<IBarProps>`
  ${({ delay, theme }) => css`
    background-color: ${theme.colors.grey};
    animation-delay: ${delay || '0ms'};
  `}
  width: 10px;
  height: 5px;
  margin: 0 2px;
  animation-name: ${dance};
  animation-duration: 400ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default Bar;