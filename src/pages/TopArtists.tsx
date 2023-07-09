import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function TopArtists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(2);
  }, []);

  return (
    <Main>
      Top Artists
    </Main>
  )
}

export default TopArtists;