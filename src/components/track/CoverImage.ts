import styled from 'styled-components';

const CoverImage = styled.img`
  max-width: 250px;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.coverShadow};
`;

export default CoverImage;
