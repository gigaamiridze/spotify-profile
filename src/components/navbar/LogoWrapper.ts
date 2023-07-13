import styled, { css } from 'styled-components';

const LogoWrapper = styled.div`
  a {
    ${({ theme }) => css`
      fill: ${theme.colors.green};
      transition: ${theme.transition};
    `}
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.colors.lightGreen}; 
    }

    svg {
      width: 50px;
    }
  }
    
  @media (max-width: 768px) {
    display: none;
  }
`;

export default LogoWrapper;
