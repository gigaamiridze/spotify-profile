import styled from 'styled-components';

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: clamp(19px, 5.8vw, 20px);
  font-weight: 700;
`;

export const NumLabel = styled.h5`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: clamp(11px, 3.5vw, 12px);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 10px;
`;
