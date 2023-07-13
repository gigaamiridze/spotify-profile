import styled from 'styled-components';

export const Preview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin-top: 100px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-gap: 50px;
    margin-top: 70px;
  }
`;

export const PreviewHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 19px;
    font-weight: 900;
  }
`;
