import styled, { css } from 'styled-components';

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  a {
    ${({ theme }) => css`
      color: ${theme.colors.lightGrey};
      fill: ${theme.colors.lightGrey};
      transition: ${theme.transition};
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
    font-size: 11px;
    padding: 16px 0;
    border-left: 5px solid transparent;

    &:hover,
    &:focus {
      ${({ theme }) => css`
        fill: ${theme.colors.white};
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        border-left-color: ${theme.colors.lightGreen};
      `}
    }

    svg {
      width: 20px;
    }
  }
`;