import { useEffect, useState } from 'react';
import { useMenuItem } from '../contexts';
import { getRecentlyPlayed } from '../utils';
import { IRecentlyPlayed } from '../interfaces';
import { PageContainer, HeaderTitle } from '../components';

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
    <PageContainer>
      <HeaderTitle>Recently Played Tracks</HeaderTitle>
    </PageContainer>
  )
}

export default RecentlyPlayed;
