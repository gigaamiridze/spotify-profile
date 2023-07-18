import styled from 'styled-components';

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NoAvatar = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  padding: 30px;

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 85px;
    height: 85px;
    
    @media (max-width: 620px) {
      width: 75px;
      height: 75px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 320px) {
    padding: 25px;
  }
`;
