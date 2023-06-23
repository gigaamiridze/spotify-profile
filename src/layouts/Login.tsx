import { SpotifyLogo } from '../assets';
import { Container, Logo, Button } from '../components';

function Login() {
  return (
    <Container>
      <Logo src={SpotifyLogo} alt='Spotify' />
      <Button>log in to spotify</Button>
    </Container>
  )
}

export default Login;