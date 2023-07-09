import { useEffect } from 'react';
import { useMenuItem } from '../contexts';

function TopTracks() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(3);
  }, []);

  return (
    <div>Top Tracks</div>
  )
}

export default TopTracks;