import { useParams } from 'react-router-dom';
import { Main } from '../components';

function Recommendations() {
  const { playlistId } = useParams();

  return (
    <Main>
      Playlist ID: {playlistId}
    </Main>
  )
}

export default Recommendations;
