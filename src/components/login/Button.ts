import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.eerieBlack};
  `}
  padding: 18px 35px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Button;