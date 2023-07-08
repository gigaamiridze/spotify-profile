import styled from 'styled-components';

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
    padding: 16px 0;
    border-left: 5px solid transparent;

    svg {
      fill: ${({ theme }) => theme.colors.lightGrey};
      width: 20px;
    }

    span {
      color: ${({ theme }) => theme.colors.lightGrey};
      font-size: 11px;
    }
  }
`;