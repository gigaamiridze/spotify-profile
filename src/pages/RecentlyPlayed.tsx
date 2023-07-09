import { useEffect } from 'react';
import { useMenuItem } from '../contexts';

function RecentlyPlayed() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(4);
  }, []);

  return (
    <div>Recently Played</div>
  )
}

export default RecentlyPlayed;