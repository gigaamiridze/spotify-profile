import { LogoutButton } from '../components';
import { Spotify } from '../constants';

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem(Spotify.ACCESS_TOKEN);
    location.reload();
  }

  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  )
}

export default Logout;
