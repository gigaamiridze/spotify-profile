import styled from 'styled-components';

const Logo = styled.img`
  height: 20vh;
  
  @media (max-width: 768px) {
    height: 18vh;
  }

  @media (max-width: 480px) {
    height: 16vh;
    width: 100%;
    object-fit: contain;
  }
`;

export default Logo;
