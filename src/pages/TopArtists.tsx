import { useEffect } from 'react';
import { useMenuItem } from '../contexts';

function TopArtists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(2);
  }, []);

  return (
    <div>Top Artists</div>
  )
}

export default TopArtists;