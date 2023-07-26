import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { PageContainer, HeaderTitle } from '../components';

function RecentlyPlayed() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(4);
  }, []);

  return (
    <PageContainer>
      <HeaderTitle>Recently Played Tracks</HeaderTitle>
    </PageContainer>
  )
}

export default RecentlyPlayed;
