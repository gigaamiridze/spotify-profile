import { useParams } from 'react-router-dom';
import { Main } from '../components';

function Playlist() {
  const { playlistId } = useParams();

  return (
    <Main>
      Playlist ID: {playlistId}
    </Main>
  )
}

export default Playlist;
