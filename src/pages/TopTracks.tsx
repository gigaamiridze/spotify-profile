import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { ITracks } from '../interfaces';
import { Range } from '../constants';
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

  const apiCalls = {
    long: getTopTracksLong(),
    medium: getTopTracksMedium(),
    short: getTopTracksShort(),
  }

  const getTracksInfo = async () => {
    const { data } = await getTopTracksLong();
    setTopTracks(data);
  }

  const changeTracksRange = async (range: Range.LONG | Range.MEDIUM | Range.SHORT) => {
    const { data } = await apiCalls[range];
    setTopTracks(data);
  }

  return (
    <PageContainer>
      <Header title='Top Tracks' changeInfoRange={changeTracksRange} />
    </PageContainer>
  )
}

export default TopTracks;
