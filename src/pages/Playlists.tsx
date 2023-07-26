import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { PageContainer, HeaderTitle } from '../components';

function Playlists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(5);
  }, []);

  return (
    <PageContainer>
      <HeaderTitle>Your Playlists</HeaderTitle>
    </PageContainer>
  )
}

export default Playlists;
