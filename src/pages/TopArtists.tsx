import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Header } from '../layouts';
import { PageContainer } from '../components';

function TopArtists() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(2);
  }, []);

  return (
    <PageContainer>
      <Header title='Top Artists' />
    </PageContainer>
  )
}

export default TopArtists;
