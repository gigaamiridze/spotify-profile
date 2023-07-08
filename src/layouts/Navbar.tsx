import { SpotifyIcon, GithubIcon } from '../assets';
import { NavbarContainer, LogoWrapper, GithubLink } from '../components';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <SpotifyIcon />
      </LogoWrapper>
      <GithubLink
        href='https://github.com/justtfelix/spotify-profile'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GithubIcon />
      </GithubLink>
    </NavbarContainer>
  )
}

export default Navbar;