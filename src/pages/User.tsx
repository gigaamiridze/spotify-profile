import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AvatarImg } from '../assets';
import { useMenuItem } from '../contexts';
import { PageRoutes } from '../constants';
import { Logout } from '../layouts';
import { IUser, IFollowing, IPlaylists } from '../interfaces';
import { 
  Main, Header, Avatar, Username, 
  Stats, Stat, Number, NumLabel 
} from '../components';

function User() {
  const { setActiveItem } = useMenuItem();
  const [user, setUser] = useState<IUser | null>(null);  
  const [following, setFollowing] = useState<IFollowing | null>(null);
  const [playlists, setPlaylists] = useState<IPlaylists | null>(null);

  useEffect(() => {
    setActiveItem(1);
  }, []);

  return (
    <Main>
      <Header>
        <Avatar src={AvatarImg} alt='avatar' />
        <Username
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >
          Felix
        </Username>
        <Stats>
          <Stat>
            <Number>0</Number>
            <NumLabel>followers</NumLabel>
          </Stat>
          <Stat>
            <Number>3</Number>
            <NumLabel>following</NumLabel>
          </Stat>
          <Stat>
            <Link to={PageRoutes.PLAYLISTS}>
              <Number>2</Number>
              <NumLabel>playlists</NumLabel>
            </Link>
          </Stat>
        </Stats>
        <Logout />
      </Header>
    </Main>
  )
}

export default User;