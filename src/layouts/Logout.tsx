import { Button } from '../components';
import { Spotify } from '../constants';

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem(Spotify.ACCESS_TOKEN);
    location.reload();
  }

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default Logout;