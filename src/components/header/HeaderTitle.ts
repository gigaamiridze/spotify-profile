import styled from 'styled-components';

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(22px, 5.8vw, 24px);
  font-weight: 900;
  line-height: 1.2;
  
  a {
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      color: ${({ theme }) => theme.colors.lightGreen};
    }
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default HeaderTitle;
