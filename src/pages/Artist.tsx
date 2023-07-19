import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { IArtist } from '../interfaces';
import { UserIcon } from '../assets';
import { getArtist } from '../utils';
import { Loader } from '../layouts';
import {
  ArtistContainer, ArtistImage, Username, NoAvatar, 
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
    <>
      {artist ? (
        <Main>
          <ArtistContainer>
            {artist.images.length > 0 ? (
              <ArtistImage
                src={artist.images[0].url}
                alt={`${artist.name}'s avatar`}
              />
            ) : (
              <NoAvatar isArtistContent={true}>
                <UserIcon />
              </NoAvatar>
            )}
            <Username isArtistContent={true}>{artist.name}</Username>
            <Stats isArtistContent={true}>
              <Stat>
                <Number isArtistContent={true}>{artist.followers.total}</Number>
                <NumLabel>followers</NumLabel>
              </Stat>
              <>
                {artist.genres.length > 0 && (
                  <Stat>
                    <Number isArtistContent={true}>{artist.genres[0]}</Number>
                    <NumLabel>genres</NumLabel>
                  </Stat>
                )}
              </>
              <Stat>
                <Number isArtistContent={true}>{artist.popularity}%</Number>
                <NumLabel>popularity</NumLabel>
              </Stat>
            </Stats>
          </ArtistContainer>
        </Main>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Artist;
