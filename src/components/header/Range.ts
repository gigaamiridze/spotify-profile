import styled, { css } from 'styled-components';
import { IActive } from '../../interfaces';

export const Ranges = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    margin-right: 0;
  }
`;

export const RangeButton = styled.button<IActive>`
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  
  span {
    ${({ isActive, theme }) => css`
      color: ${isActive ? theme.colors.white : theme.colors.lightGrey};
      font-family: ${theme.fonts.primary};
      border-bottom: 1px solid ${isActive ? theme.colors.white : 'transparent'};
      transition: ${theme.transition};
    `}
    font-size: clamp(14px, 3.2vw, 16px);
    font-weight: 500;
    line-height: 1.5;
    white-space: nowrap;
    padding-bottom: 2px;
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
