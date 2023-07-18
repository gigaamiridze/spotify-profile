import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { IArtist } from '../interfaces';
import { getArtist } from '../utils';
import { Main, ArtistContainer, ArtistImage, ArtistName } from '../components';

function Artist() {
  const { artistId } = useParams();
  const { setActiveItem } = useMenuItem();
  const [artist, setArtist] = useState<IArtist | null>(null);

  useEffect(() => {
    setActiveItem(null);
    getArtistInfo(artistId);
  }, [artistId]);

  const getArtistInfo = async (artistId: string | undefined) => {
    if (artistId) {
      const { data } = await getArtist(artistId);
      setArtist(data);
    }
  }

  return (
    <Main>
      <ArtistContainer>
        <ArtistImage 
          src={artist?.images[0].url} 
          alt={`${artist?.name}'s image`} 
        />
        <ArtistName>{artist?.name}</ArtistName>
      </ArtistContainer>
    </Main>
  )
}

export default Artist;
