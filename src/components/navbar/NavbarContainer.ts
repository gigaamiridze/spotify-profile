import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100px;
  min-height: 100vh;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.navBlack};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
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
