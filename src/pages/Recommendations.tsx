import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader } from '../layouts';
import { PageRoutes } from '../constants';
import { pageAnimation } from '../animations';
import { IPlaylist, IRecommendations } from '../interfaces';
import { getPlaylist, getRecommendationsForTracks } from '../utils';
import { PageContainer, HeaderTitle } from '../components';

function Recommendations() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);
  const [recommendations, setRecommendations] = useState<IRecommendations | null>(null);

  useEffect(() => {
    getPlaylistInfo();
  }, [playlistId]);

  useEffect(() => {
    getRecommendationsInfo();
  }, [playlist]);

  const getPlaylistInfo = async () => {
    if (playlistId) {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    }
  }

  const getRecommendationsInfo = async () => {
    if (playlist) {
      const { data } = await getRecommendationsForTracks(playlist.tracks.items);
      setRecommendations(data);
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
