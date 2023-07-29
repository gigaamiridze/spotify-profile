import {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader } from '../layouts';
import { getPlaylist } from '../utils';
import { PageRoutes } from '../constants';
import { IPlaylist } from '../interfaces';
import { pageAnimation } from '../animations';
import { PageContainer, HeaderTitle } from '../components';

function Recommendations() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);

  useEffect(() => {
    getPlaylistInfo();
  }, [playlistId]);

  const getPlaylistInfo = async () => {
    if (playlistId) {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    }
  }

  return (
    <>
      {playlist ? (
        <PageContainer
          variants={pageAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <HeaderTitle>
            Recommended Tracks Based On&nbsp;
            <Link to={`${PageRoutes.HOST}/${PageRoutes.PLAYLIST}/${playlist.id}`}>
              {playlist.name}
            </Link>
          </HeaderTitle>
        </PageContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Recommendations;
