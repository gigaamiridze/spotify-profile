import styled from 'styled-components';

export const PlaceholderArtwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  padding-bottom: 100%;
  
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const PlaceholderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
