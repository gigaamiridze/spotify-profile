import styled from 'styled-components';
import { Main } from '../shared';

const UserContainer = styled(Main)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  @media (max-width: 768px) {
    row-gap: 70px;
  }
`;

export default UserContainer;
