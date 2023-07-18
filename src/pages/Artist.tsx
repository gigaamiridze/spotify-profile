import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IArtist } from '../interfaces';
import { Main } from '../components';

function Artist() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState<IArtist | null>(null);

  return (
    <Main>
      Artist ID: {artistId}
    </Main>
  )
}

export default Artist;
