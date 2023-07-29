import styled from 'styled-components';

export const VerticalChartContainer = styled.div`
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

export const HorizontalChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 40px;
  
  @media (max-width: 1024px) {
    height: 250px;
  }
  
  @media (max-width: 768px) {
    height: 450px;
  }

  @media (max-width: 576px) {
    height: 400px;
  }

  @media (max-width: 420px) {
    height: 350px;
  }

  @media (max-width: 375px) {
    height: 310px;
  }
  
  @media (max-width: 320px) {
    height: 270px;
  }
`;
