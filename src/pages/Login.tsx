import { SpotifyLogo } from '../assets';
import { Client, Url } from '../constants';
import { Container, Logo, Button } from '../components';

function Login() {
  const handleClick = () => {
    const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
    window.location.href = `${Url.API}?client_id=${Client.ID}&redirect_uri=${Url.REDIRECT}&scope=${scope}&response_type=token&show_daialog=true`;
  }

  return (
    <Container>
      <Logo src={SpotifyLogo} alt='Spotify' />
      <Button onClick={handleClick}>log in to spotify</Button>
    </Container>
  )
}

export default Login;