import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist } from '../utils';
import { IPlaylist } from '../interfaces';
import { useMenuItem } from '../contexts';
import { PlaylistContainer } from '../components';

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
    <PlaylistContainer>
      Playlist Name: {playlist?.name}
    </PlaylistContainer>
  )
}

export default Playlist;
