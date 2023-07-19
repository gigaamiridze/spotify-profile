import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { IArtist } from '../interfaces';
import { getArtist } from '../utils';
import { 
  ArtistContainer, ArtistImage, Username, 
  Main, Stats, Stat, Number, NumLabel 
} from '../components';

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
        <Username isArtistContent={true}>{artist?.name}</Username>
        <Stats isArtistContent={true}>
          <Stat>
            <Number isArtistContent={true}>{artist?.followers.total}</Number>
            <NumLabel>followers</NumLabel>
          </Stat>
          <Stat>
            <Number isArtistContent={true}>{artist?.genres[0]}</Number>
            <NumLabel>genres</NumLabel>
          </Stat>
          <Stat>
            <Number isArtistContent={true}>{artist?.popularity}%</Number>
            <NumLabel>popularity</NumLabel>
          </Stat>
        </Stats>
      </ArtistContainer>
    </Main>
  )
}

export default Artist;
