import styled, { css } from 'styled-components';
import { IActive } from '../../interfaces';

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
  }
`;

export const MenuItem = styled.li<IActive>`
  @media (max-width: 768px) {
    flex-grow: 1;
    flex-basis: 100%;
    height: 100%;
  }
  
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
    
    @media (max-width: 768px) {
      height: 100%;
      justify-content: center;
      padding: 0;
      border-left: 0;
      border-top: 3px solid transparent;
      border-top-color: ${({ isActive, theme }) => isActive && theme.colors.lightGreen};
    }
    
    &:hover {
      ${({ theme }) => css`
        fill: ${theme.colors.white};
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        border-left-color: ${theme.colors.lightGreen};
      `}

      @media (max-width: 768px) {
        border-left: 0;
        border-top-color: ${({ theme }) => theme.colors.lightGreen};
      }
    }

    svg {
      width: 20px;
      height: 20px;

      @media (max-width: 375px) {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
