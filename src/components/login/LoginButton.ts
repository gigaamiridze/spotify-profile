import styled, { css } from 'styled-components';

const LoginButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  padding: 16px 35px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export default LoginButton;