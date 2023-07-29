import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { ITracks } from '../interfaces';
import { Range } from '../constants';
import { pageAnimation } from '../animations';
import { getTopTracksShort, getTopTracksMedium, getTopTracksLong } from '../utils';
import { Header, Loader, TrackItem } from '../layouts';
import { PageContainer, ItemsList } from '../components';

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
    <PageContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Header title='Top Tracks' changeInfoRange={changeTracksRange} />
      {topTracks ? (
        <ItemsList>
          {topTracks.items.map((track, index) => (
            <TrackItem key={index} track={track} />
          ))}
        </ItemsList>
      ) : (
        <Loader />
      )}
    </PageContainer>
  )
}

export default TopTracks;
