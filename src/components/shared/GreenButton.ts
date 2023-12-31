import styled, { css } from 'styled-components';

const GreenButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 11px 24px;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
  
  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

export default GreenButton;
