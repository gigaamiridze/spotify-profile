import { useState, useEffect } from 'react';
import { useMenuItem } from '../contexts';
import { IArtists } from '../interfaces';
import { Range } from '../constants';
import { pageAnimation, contentAnimation } from '../animations';
import { getTopArtistsShort, getTopArtistsMedium, getTopArtistsLong } from '../utils';
import { Header, Loader, ArtistItem } from '../layouts';
import { PageContainer, ItemsContainer } from '../components';

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
    setTopArtists(data);
  }

  return (
    <PageContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Header title='Top Artists' changeInfoRange={changeArtistsRange} />
      {topArtists ? (
        <ItemsContainer
          isArtistContent={true}
          variants={contentAnimation}
          initial='initial'
          animate='animate'
        >
          {topArtists.items.map((artist, index) => (
              <ArtistItem
                key={index}
                artist={artist}
                imageNum={1}
                isArtistContent={true}
              />
          ))}
        </ItemsContainer>
      ) : (
        <Loader />
      )}
    </PageContainer>
  )
}

export default TopArtists;
