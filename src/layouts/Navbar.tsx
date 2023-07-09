import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
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
          <Link to={PageRoutes.ROOT}>
            <UserIcon />
            <span>Profile</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={PageRoutes.ARTISTS}>
            <MicrophoneIcon />
            <span>Top Artists</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={PageRoutes.TRACKS}>
            <MusicIcon />
            <span>Top Tracks</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={PageRoutes.RECENT}>
            <TimeIcon />
            <span>Recent</span>
          </Link>
        </MenuItem>
        <MenuItem>
          < Link to={PageRoutes.PLAYLISTS}>
            <PlaylistIcon />
            <span>Playlists</span>
          </Link>
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