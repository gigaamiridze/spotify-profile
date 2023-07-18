import { useParams } from 'react-router-dom';
import { Main } from '../components';

function Artist() {
  const { artistId } = useParams();

  return (
    <Main>
      Artist ID: {artistId}
    </Main>
  )
}

export default Artist;
