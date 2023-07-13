import styled, { css } from 'styled-components';

const GithubLink = styled.a`
  ${({ theme }) => css`
    fill: ${theme.colors.lightGrey};
    transition: ${theme.transition};
  `}

  &:hover {
    fill: ${({ theme }) => theme.colors.blue}; 
  }

  svg {
    width: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default GithubLink;
