import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function TopTracks() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(3);
  }, []);

  return (
    <Main>
      Top Tracks
    </Main>
  )
}

export default TopTracks;