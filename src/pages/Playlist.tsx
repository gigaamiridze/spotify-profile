import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist } from '../utils';
import { IPlaylist } from '../interfaces';
import { useMenuItem } from '../contexts';
import { Loader, PlaylistPlaceholder, TrackItem } from '../layouts';
import {
  PlaylistContainer, ItemImage, LeftContent,
  RightContent, ItemsList, PlaylistName, ItemGreyTitle
} from '../components';

function Playlist() {
  const { setActiveItem } = useMenuItem();
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);

  useEffect(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    getPlaylistInfo();
  }, [playlistId]);

  const getPlaylistInfo = async () => {
    if (playlistId) {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    }
  }

  return (
    <>
      {playlist ? (
        <PlaylistContainer>
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
              <ItemGreyTitle>{playlist.description}</ItemGreyTitle>
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
