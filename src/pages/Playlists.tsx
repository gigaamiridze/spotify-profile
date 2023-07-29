import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlaylists } from '../utils';
import { useMenuItem } from '../contexts';
import { PageRoutes } from '../constants';
import { IPlaylists } from '../interfaces';
import { pageAnimation } from '../animations';
import { Loader, PlaylistPlaceholder } from '../layouts';
import {
  PageContainer, HeaderTitle, ItemsContainer,
  PlaylistItem, PlaylistCover, ItemImage,
  Mask, ItemName, TotalTracks
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
    <PageContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <HeaderTitle>Your Playlists</HeaderTitle>
      {playlists ? (
        <ItemsContainer isArtistContent={false}>
          {playlists.items.map((playlist) => {
            const { id, images, name, owner, tracks } = playlist;

            return (
              <PlaylistItem key={id}>
                <Link to={`${PageRoutes.HOST}/${PageRoutes.PLAYLIST}/${id}`}>
                  <PlaylistCover>
                    {images.length > 0 ? (
                      <ItemImage
                        src={images[0].url}
                        alt={`${owner.display_name}'s Playlist Cover`}
                        isArtistContent={false}
                      />
                    ) : (
                      <PlaylistPlaceholder />
                    )}
                    <Mask isArtistContent={false} />
                  </PlaylistCover>
                </Link>
                <div id='flex-box'>
                  <Link to={`${PageRoutes.HOST}/${PageRoutes.PLAYLIST}/${id}`}>
                    <ItemName isArtistContent={false}>{name}</ItemName>
                  </Link>
                  <TotalTracks isPlaylistContent={false}>{tracks.total} tracks</TotalTracks>
                </div>
              </PlaylistItem>
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
