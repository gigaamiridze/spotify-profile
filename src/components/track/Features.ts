import styled, { css } from 'styled-components';

export const AudioFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 70px;

  @media (max-width: 480px) {
    row-gap: 50px;
  }
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
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const Feature = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grey};
    border-right: 1px solid ${theme.colors.grey};
  `}
  padding: 17px 10px;
`;

export const FeatureText = styled.h4`
  color: ${({ theme }) => theme.colors.lightestGrey};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const FeatureLabel = styled.p`
  color: ${({ theme }) => theme.colors.lightestGrey};
  font-size: 12px;
`;
