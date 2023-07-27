import { useEffect, useState } from 'react';
import { getPlaylists } from '../utils';
import { useMenuItem } from '../contexts';
import { IPlaylists } from '../interfaces';
import { Loader } from '../layouts';
import {
  PageContainer, HeaderTitle, ItemsContainer,
  PlaylistContainer, PlaylistCover, ItemImage,
  Mask
} from '../components';

function Playlists() {
  const { setActiveItem } = useMenuItem();
  const [playlists, setPlaylists] = useState<IPlaylists | null>(null);

  useEffect(() => {
    setActiveItem(5);
    getPlaylistsInfo();
  }, []);

  const getPlaylistsInfo = async () => {
    const { data } = await getPlaylists();
    setPlaylists(data);
  }

  return (
    <PageContainer>
      <HeaderTitle>Your Playlists</HeaderTitle>
      {playlists ? (
        <ItemsContainer>
          {playlists.items.map((playlist) => {
            const { id, images, name, owner, tracks } = playlist;

            return (
              <PlaylistContainer key={id}>
                <PlaylistCover>
                  {images.length > 0 ? (
                    <ItemImage
                      src={images[0].url}
                      alt={`${owner.display_name}'s Playlist Cover`}
                      isArtistContent={false}
                    />
                  ) : (
                    <div>No Image</div>
                  )}
                  <Mask isArtistContent={false} />
                </PlaylistCover>
              </PlaylistContainer>
            )
          })}
        </ItemsContainer>
      ) : (
        <Loader />
      )}
    </PageContainer>
  )
}

export default Playlists;
