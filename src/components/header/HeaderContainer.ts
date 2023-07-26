import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
  }
  
  @media (max-width: 375px) {
    row-gap: 20px;
  }
`;

export default HeaderContainer;
