import { SpotifyLogo } from '../assets';
import { Container, Logo } from '../components';

function Login() {
  return (
    <Container>
      <Logo src={SpotifyLogo} alt='Spotify' />
    </Container>
  )
}

export default Login;