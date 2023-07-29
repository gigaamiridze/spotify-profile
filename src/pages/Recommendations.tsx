import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { Loader, TrackItem } from '../layouts';
import { IPlaylist, IRecommendations } from '../interfaces';
import { pageAnimation, contentAnimation } from '../animations';
import { getPlaylist, getRecommendationsForTracks } from '../utils';
import { PageContainer, HeaderTitle, ItemsList } from '../components';

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
          {recommendations && (
            <ItemsList
              variants={contentAnimation}
              initial='initial'
              animate='animate'
            >
              {recommendations.tracks.map((track, index) => (
                <TrackItem key={index} track={track} />
              ))}
            </ItemsList>
          )}
        </PageContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Recommendations;
