import styled from 'styled-components';

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: 20px;
  font-weight: 700;
`;

export const NumLabel = styled.h5`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 10px;
`;