import styled from 'styled-components';

const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  
  #flex-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
    
    a {
      text-align: center;
      line-height: 1.2;
    }
  }
`;

export default PlaylistItem;
