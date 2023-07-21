import styled, { css } from 'styled-components';

export const AudioFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
`;

export const Features = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.grey};
    border-left: 1px solid ${theme.colors.grey};
  `}
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  text-align: center;
`;
