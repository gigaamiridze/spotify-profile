import { 
  SpotifyIcon, 
  GithubIcon,
  UserIcon,
  MicrophoneIcon,
  MusicIcon,
  TimeIcon,
  PlaylistIcon 
} from '../assets';
import { NavbarContainer, LogoWrapper, GithubLink, Menu, MenuItem } from '../components';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <SpotifyIcon />
      </LogoWrapper>
      <Menu>
        <MenuItem>
          <a href='#'>
            <UserIcon />
            <span>Profile</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='#'>
            <MicrophoneIcon />
            <span>Top Artists</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='#'>
            <MusicIcon />
            <span>Top Tracks</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='#'>
            <TimeIcon />
            <span>Recent</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='#'>
            <PlaylistIcon />
            <span>Playlists</span>
          </a>
        </MenuItem>
      </Menu>
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