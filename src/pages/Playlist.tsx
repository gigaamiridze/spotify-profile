import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { Main } from '../components';

function Playlist() {
  const { setActiveItem } = useMenuItem();
  const { playlistId } = useParams();

  useEffect(() => {
    setActiveItem(null);
  }, []);

  return (
    <Main>
      Playlist ID: {playlistId}
    </Main>
  )
}

export default Playlist;
