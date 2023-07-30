import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { Loader, TrackItem } from '../layouts';
import { IPlaylist, IRecommendations } from '../interfaces';
import { pageAnimation, contentAnimation } from '../animations';
import {
  getPlaylist, getRecommendationsForTracks, getUser,
  doesUserFollowPlaylist, addTracksToPlaylist, followPlaylist
} from '../utils';
import { PageContainer, HeaderTitle, ItemsList } from '../components';

function Recommendations() {
  const { playlistId } = useParams();
  const [userId, setUserId] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);
  const [recPlaylistId, setRecPlaylistId] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<IRecommendations | null>(null);

  useEffect(() => {
    getPlaylistInfo();
    getUserId();
  }, [playlistId]);

  useEffect(() => {
    getRecommendationsInfo();
  }, [playlist]);

  useEffect(() => {
    isUserFollowingPlaylist();
    addTracksAndFollow();
  }, [recPlaylistId, recommendations, userId]);

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

  const getUserId = async () => {
    const { data } = await getUser();
    setUserId(data.id);
  }

  const isUserFollowingPlaylist = async () => {
    if (playlistId && userId) {
      const { data } = await doesUserFollowPlaylist(playlistId, userId);
      setIsFollowing(data[0]);
    }
  }

  const addTracksAndFollow = async () => {
    const uris = recommendations?.tracks.map(({ uri }) => uri).join(',');
    console.log('uris', uris);
    if (recPlaylistId && uris) {
      const { data } = await addTracksToPlaylist(recPlaylistId, uris);
      console.log(data);

      if (data) {
        await followPlaylist(recPlaylistId);
      }
    }
  };

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
