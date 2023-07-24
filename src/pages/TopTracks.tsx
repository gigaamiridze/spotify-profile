import { useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { Header } from '../layouts';
import { PageContainer } from '../components';

function TopTracks() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(3);
  }, []);

  return (
    <PageContainer>
      <Header title='Top Tracks' />
    </PageContainer>
  )
}

export default TopTracks;
