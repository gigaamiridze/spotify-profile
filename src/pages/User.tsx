import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function User() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(1);
  }, []);

  return (
    <Main>
      User
    </Main>
  )
}

export default User;