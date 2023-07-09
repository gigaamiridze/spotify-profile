import { useEffect } from 'react';
import { useMenuItem } from '../contexts';

function Playlists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(5);
  }, []);

  return (
    <div>Playlists</div>
  )
}

export default Playlists;