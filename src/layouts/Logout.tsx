import { handleLogout } from '../utils';
import { LogoutButton } from '../components';

function Logout() {
  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  )
}

export default Logout;
