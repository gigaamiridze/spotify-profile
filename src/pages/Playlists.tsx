import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function Playlists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(5);
  }, []);

  return (
    <Main>
      Playlists
    </Main>
  )
}

export default Playlists;