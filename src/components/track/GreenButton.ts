import styled, { css } from 'styled-components';

const GreenButton = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    transition: ${theme.transition};
  `}
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 11px 24px;
  border-radius: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export default GreenButton;
