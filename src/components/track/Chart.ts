import styled from 'styled-components';

export const ChartContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 650px;
  
  @media (max-width: 800px) {
    height: 550px;
  }

  @media (max-width: 600px) {
    height: 470px;
  }
  
  @media (max-width: 500px) {
    height: 400px;
  }
  
  @media (max-width: 320px) {
    height: 380px;
  }

  #chart {
    width: 100% !important;
    height: 100% !important;
    margin: 0 auto;
  }
`;
