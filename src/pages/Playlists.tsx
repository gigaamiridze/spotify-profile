import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MusicIcon } from '../assets';
import { getPlaylists } from '../utils';
import { useMenuItem } from '../contexts';
import { PageRoutes } from '../constants';
import { IPlaylists } from '../interfaces';
import { Loader } from '../layouts';
import {
  PageContainer, HeaderTitle, ItemsContainer,
  PlaylistContainer, PlaylistCover, ItemImage,
  Mask, PlaceholderArtwork, PlaceholderContent
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
                <Link to={`${PageRoutes.HOST}/${PageRoutes.PLAYLIST}/${id}`}>
                  <PlaylistCover>
                    {images.length > 0 ? (
                      <ItemImage
                        src={images[0].url}
                        alt={`${owner.display_name}'s Playlist Cover`}
                        isArtistContent={false}
                      />
                    ) : (
                      <PlaceholderArtwork>
                        <PlaceholderContent>
                          <MusicIcon />
                        </PlaceholderContent>
                      </PlaceholderArtwork>
                    )}
                    <Mask isArtistContent={false} />
                  </PlaylistCover>
                </Link>
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
