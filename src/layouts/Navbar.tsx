import { Link } from 'react-router-dom';
import { menu } from '../data';
import { SpotifyIcon, GithubIcon } from '../assets';
import { NavbarContainer, LogoWrapper, GithubLink, Menu, MenuItem } from '../components';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <SpotifyIcon />
      </LogoWrapper>
      <Menu>
        {menu.map(item => {
          const { id, title, path, icon } = item;
          const Icon = icon;

          return (
            <MenuItem key={id}>
              <Link to={path}>
                <Icon />
                <span>{title}</span>
              </Link>
            </MenuItem>
          )
        })}
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