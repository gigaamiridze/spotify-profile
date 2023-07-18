import styled, { css } from 'styled-components';

const NavbarContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.navBlack};
    box-shadow: ${theme.coverShadow};
  `}
  width: 100px;
  min-height: 100vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 70px;
    height: 70px;
    padding: 0;
    top: auto;
    bottom: 0;
    flex-direction: row;
  }
`;

export default NavbarContainer;
