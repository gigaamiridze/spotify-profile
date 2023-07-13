import styled, { css } from 'styled-components';

const Username = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transition: ${theme.transition};
  `}
  font-size: 50px;
  font-weight: 700;
  margin: 25px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`;

export default Username;
