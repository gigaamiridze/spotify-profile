import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { IArtists } from '../interfaces';
import { getTopArtistsShort, getTopArtistsMedium, getTopArtistsLong } from '../utils';
import { Header } from '../layouts';
import { PageContainer } from '../components';

function TopArtists() {
  const { setActiveItem } = useMenuItem();
  const [topArtists, setTopArtists] = useState<IArtists | null>(null);

  useEffect(() => {
    setActiveItem(2);
    getArtistsInfo();
  }, []);

  const getArtistsInfo = async () => {
    const { data } = await getTopArtistsLong();
    setTopArtists(data);
  }

  return (
    <PageContainer>
      <Header title='Top Artists' />
    </PageContainer>
  )
}

export default TopArtists;
