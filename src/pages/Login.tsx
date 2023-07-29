import { SpotifyLogo } from '../assets';
import { Client, Url } from '../constants';
import { pageAnimation } from '../animations';
import { LoginContainer, LoginButton, Logo } from '../components';

function Login() {
  const handleClick = () => {
    const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
    location.href = `${Url.API}?client_id=${Client.ID}&redirect_uri=${Url.REDIRECT}&scope=${scope}&response_type=token&show_dialog=true`;
  }

  return (
    <LoginContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Logo src={SpotifyLogo} alt='spotify' />
      <LoginButton onClick={handleClick}>
        log in to spotify
      </LoginButton>
    </LoginContainer>
  )
}

export default Login;
