import { useEffect, useState } from 'react';
import { getPlaylists } from '../utils';
import { useMenuItem } from '../contexts';
import { IPlaylists } from '../interfaces';
import { PageContainer, HeaderTitle } from '../components';

function Playlists() {
  const { setActiveItem } = useMenuItem();
  const [playlists, setPlaylists] = useState<IPlaylists | null>(null);

  useEffect(() => {
    setActiveItem(5);
    getPlaylistsInfo();
  }, []);

  const getPlaylistsInfo = async () => {
    const { data } = await getPlaylists();
    setPlaylists(data);
  }

  return (
    <PageContainer>
      <HeaderTitle>Your Playlists</HeaderTitle>
    </PageContainer>
  )
}

export default Playlists;
