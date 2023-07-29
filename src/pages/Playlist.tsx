import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlaylist, getAudioFeaturesForTracks } from '../utils';
import { PageRoutes, Direction } from '../constants';
import { IAudioFeaturesForTrack, IPlaylist } from '../interfaces';
import { useMenuItem } from '../contexts';
import { pageAnimation } from '../animations';
import { Loader, PlaylistPlaceholder, TrackItem, FeatureChart } from '../layouts';
import {
  PlaylistContainer, ItemImage, LeftContent,
  RightContent, ItemsList, PlaylistName,
  ItemGreyTitle, TotalTracks, GreenButton
} from '../components';

function Playlist() {
  const { setActiveItem } = useMenuItem();
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);
  const [audioFeatures, setAudioFeatures] = useState<IAudioFeaturesForTrack | null>(null);

  useEffect(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    getPlaylistInfo();
  }, [playlistId]);

  useEffect(() => {
    getAudioFeaturesInfo();
  }, [playlist]);

  const getPlaylistInfo = async () => {
    if (playlistId) {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    }
  }

  const getAudioFeaturesInfo = async () => {
    if (playlist) {
      const { data } = await getAudioFeaturesForTracks(playlist.tracks.items);
      setAudioFeatures(data);
    }
  }

  return (
    <>
      {playlist ? (
        <PlaylistContainer
          variants={pageAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <LeftContent>
            {playlist.images.length > 0 ? (
              <ItemImage
                src={playlist.images[0].url}
                alt={`${playlist.owner.display_name}'s Playlist Cover`}
                isArtistContent={false}
              />
            ) : (
              <PlaylistPlaceholder />
            )}
            <a href={playlist.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
              <PlaylistName>{playlist.name}</PlaylistName>
            </a>
            <ItemGreyTitle>By {playlist.owner.display_name}</ItemGreyTitle>
            {playlist.description && (
              <ItemGreyTitle id='description'>{playlist.description}</ItemGreyTitle>
            )}
            <TotalTracks isPlaylistContent={true}>{playlist.tracks.total} tracks</TotalTracks>
            <Link to={`${PageRoutes.HOST}/${PageRoutes.RECOMMENDATIONS}/${playlist.id}`}>
              <GreenButton>get recommendations</GreenButton>
            </Link>
            {audioFeatures && (
              <FeatureChart features={audioFeatures.audio_features} direction={Direction.HORIZONTAL} />
            )}
          </LeftContent>
          <RightContent>
            {playlist.tracks && (
              <ItemsList>
                {playlist.tracks.items.map(({ track }, index) => (
                  <TrackItem key={index} track={track} />
                ))}
              </ItemsList>
            )}
          </RightContent>
        </PlaylistContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Playlist;
