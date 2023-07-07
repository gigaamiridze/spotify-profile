import styled, { css } from 'styled-components';

const LogoWrapper = styled.div`
  ${({ theme }) => css`
    fill: ${theme.colors.green};
    transition: ${theme.transition};
  `}
  cursor: pointer;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.lightGreen}; 
  }

  svg {
    width: 50px;
  }
`;

export default LogoWrapper;