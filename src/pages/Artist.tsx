import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { IArtist } from '../interfaces';
import { UserIcon } from '../assets';
import { getArtist, formatWithCommas } from '../utils';
import { Loader } from '../layouts';
import {
  ArtistContainer, ArtistImage, Username,
  NoAvatar, Stats, Stat, Number, NumLabel
} from '../components';

function Artist() {
  const { artistId } = useParams();
  const { setActiveItem } = useMenuItem();
  const [artist, setArtist] = useState<IArtist | null>(null);

  useEffect(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    getArtistData();
  }, [artistId]);

  const getArtistData = async () => {
    if (artistId) {
      const { data } = await getArtist(artistId);
      setArtist(data);
    }
  }

  return (
    <>
      {artist ? (
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
              <Number isArtistContent={true}>
                {formatWithCommas(artist.followers.total)}
              </Number>
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
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Artist;
