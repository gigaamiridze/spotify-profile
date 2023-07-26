import styled from 'styled-components';

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(22px, 5.8vw, 24px);
  font-weight: 900;
`;

export default HeaderTitle;
