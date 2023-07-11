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
    width: 85px;
    height: 85px;
  }
`;