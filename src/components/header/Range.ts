import styled, { css } from 'styled-components';

export const Ranges = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
`;

export const RangeButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  
  span {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-family: ${theme.fonts.primary};
      border-bottom: 1px solid ${theme.colors.white};
    `}
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    white-space: nowrap;
    padding-bottom: 2px;
  }
`;
