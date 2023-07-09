import styled, { css } from 'styled-components';

const Username = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transition: ${theme.transition};
  `}
  font-size: 50px;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export default Username;