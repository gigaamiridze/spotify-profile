import { useEffect, useState } from 'react';
import { useMenuItem } from '../contexts';
import { getRecentlyPlayed } from '../utils';
import { pageAnimation } from '../animations';
import { IRecentlyPlayed } from '../interfaces';
import { TrackItem, Loader } from '../layouts';
import { PageContainer, HeaderTitle, ItemsList } from '../components';

function RecentlyPlayed() {
  const { setActiveItem } = useMenuItem();
  const [recentlyPlayed, setRecentlyPlayed] = useState<IRecentlyPlayed | null>(null);

  useEffect(() => {
    setActiveItem(4);
    getRecentlyPlayedTracksInfo();
  }, []);

  const getRecentlyPlayedTracksInfo = async () => {
    const { data } = await getRecentlyPlayed();
    setRecentlyPlayed(data);
  }

  return (
    <PageContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <HeaderTitle>Recently Played Tracks</HeaderTitle>
      {recentlyPlayed ? (
        <ItemsList>
          {recentlyPlayed.items.map(({ track }, index) => (
            <TrackItem key={index} track={track} />
          ))}
        </ItemsList>
      ) : (
        <Loader />
      )}
    </PageContainer>
  )
}

export default RecentlyPlayed;
