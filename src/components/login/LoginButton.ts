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
  
  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }

  @media (max-width: 375px) {
    padding: 14px 35px;
    font-size: 14px;
  }
  
  @media (max-width: 320px) {
    padding: 13px 30px;
    font-size: 13px;
  }
`;

export default LoginButton;
