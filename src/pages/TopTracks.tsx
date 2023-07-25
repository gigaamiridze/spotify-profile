import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { ITracks } from '../interfaces';
import { getTopTracksShort, getTopTracksMedium, getTopTracksLong } from '../utils';
import { Header } from '../layouts';
import { PageContainer } from '../components';

function TopTracks() {
  const { setActiveItem } = useMenuItem();
  const [topTracks, setTopTracks] = useState<ITracks | null>(null);

  useEffect(() => {
    setActiveItem(3);
    getTracksInfo();
  }, []);

  const getTracksInfo = async () => {
    const { data } = await getTopTracksLong();
    setTopTracks(data);
  }

  return (
    <PageContainer>
      <Header title='Top Tracks' />
    </PageContainer>
  )
}

export default TopTracks;
