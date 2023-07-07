import { SpotifyIcon } from '../assets';
import { NavbarContainer, LogoWrapper } from '../components';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <SpotifyIcon />
      </LogoWrapper>
    </NavbarContainer>
  )
}

export default Navbar;