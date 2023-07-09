import styled, { css } from 'styled-components';
import { IMenuItemProps } from '../../interfaces';

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li<IMenuItemProps>`
  a {
    border-left: 5px solid transparent;
    ${({ isActive, theme }) => css`
      color: ${isActive ? theme.colors.white : theme.colors.lightGrey};
      fill: ${isActive ? theme.colors.white : theme.colors.lightGrey};
      border-left-color: ${isActive && theme.colors.lightGreen};
      background-color: ${isActive && theme.colors.black};
      transition: ${theme.transition};
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
    font-size: 11px;
    padding: 16px 0;

    &:hover {
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