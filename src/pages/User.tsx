import { useEffect } from 'react';
import { AvatarImg } from '../assets';
import { useMenuItem } from '../contexts';
import { Main, Header, Avatar, Username } from '../components';

function User() {
  const { setActiveItem } = useMenuItem();

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
      </Header>
    </Main>
  )
}

export default User;