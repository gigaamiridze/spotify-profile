import styled from 'styled-components';

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(22px, 5.8vw, 24px);
  font-weight: 900;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default HeaderTitle;
