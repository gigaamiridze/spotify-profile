import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { IArtists } from '../interfaces';
import { Range } from '../constants';
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

  const apiCalls = {
    long: getTopArtistsLong(),
    medium: getTopArtistsMedium(),
    short: getTopArtistsShort(),
  }

  const getArtistsInfo = async () => {
    const { data } = await getTopArtistsLong();
    setTopArtists(data);
  }

  const changeArtistsRange = async (range: Range.LONG | Range.MEDIUM | Range.SHORT) => {
    const { data } = await apiCalls[range];
    console.log(data);
    setTopArtists(data);
  }

  return (
    <PageContainer>
      <Header title='Top Artists' changeInfoRange={changeArtistsRange} />
    </PageContainer>
  )
}

export default TopArtists;
