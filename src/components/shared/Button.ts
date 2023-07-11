import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.colors.white};
    transition: ${theme.transition};
  `}
  background-color: transparent;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    `}
  }
`;

export const LogoutButton = styled(Button)`
  padding: 12px 30px;
`;

export const SeeMoreButton = styled(Button)`
  white-space: nowrap;
  padding: 11px 25px;
`;