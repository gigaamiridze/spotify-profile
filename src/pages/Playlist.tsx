import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist } from '../utils';
import { IPlaylist } from '../interfaces';
import { useMenuItem } from '../contexts';
import { Loader, PlaylistPlaceholder } from '../layouts';
import { PlaylistContainer, ItemImage, LeftContent } from '../components';

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
          </LeftContent>
        </PlaylistContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Playlist;
