import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function RecentlyPlayed() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(4);
  }, []);

  return (
    <Main>
      Recently Played
    </Main>
  )
}

export default RecentlyPlayed;