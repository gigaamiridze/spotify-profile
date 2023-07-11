import styled, { css } from 'styled-components';

const Mask = styled.div`
  ${({ theme }) => css`
    fill: ${theme.colors.white};
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
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