import { SpotifyLogo } from '../assets';
import { Client, Url } from '../constants';
import { Container, Logo, LoginButton } from '../components';

function Login() {
  const handleClick = () => {
    const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
    location.href = `${Url.API}?client_id=${Client.ID}&redirect_uri=${Url.REDIRECT}&scope=${scope}&response_type=token&show_daialog=true`;
  }

  return (
    <Container>
      <Logo src={SpotifyLogo} alt='spotify' />
      <LoginButton onClick={handleClick}>
        log in to spotify
      </LoginButton>
    </Container>
  )
}

export default Login;