import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '../assets';
import { getUserInfo } from '../utils';
import { useMenuItem } from '../contexts';
import { PageRoutes } from '../constants';
import { IUser, IFollowing, IPlaylists, IArtists, ITracks } from '../interfaces';
import { Logout, Loader, ArtistItem, TrackItem } from '../layouts';
import {
  Main, Header, Avatar, NoAvatar, Username, 
  Stats, Stat, Number, NumLabel, SeeMoreButton, 
  Preview, PreviewHeading, ItemsList 
} from '../components';

function User() {
  const { setActiveItem } = useMenuItem();
  const [user, setUser] = useState<IUser | null>(null);
  const [following, setFollowing] = useState<IFollowing | null>(null);
  const [playlists, setPlaylists] = useState<IPlaylists | null>(null);
  const [topArtists, setTopArtists] = useState<IArtists | null>(null);
  const [topTracks, setTopTracks] = useState<ITracks | null>(null); 

  useEffect(() => {
    setActiveItem(1);
    getData();
  }, []);

  const getData = async () => {
    const { user, following, playlists, topArtists, topTracks } = await getUserInfo();
    
    setUser(user);
    setFollowing(following);
    setPlaylists(playlists);
    setTopArtists(topArtists);
    setTopTracks(topTracks);
  }

  return (
    <>
      {user ? (
        <Main>
          <Header>
            {user.images.length > 0 ? (
              <Avatar 
                src={user.images[1].url} 
                alt={`${user.display_name}'s avatar`} 
              />
            ) : (
              <NoAvatar>
                <UserIcon />
              </NoAvatar>
            )}
            <Username
              href={user.external_urls.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              {user.display_name}
            </Username>
            <Stats>
              <Stat>
                <Number>{user.followers.total}</Number>
                <NumLabel>followers</NumLabel>
              </Stat>
              <Stat>
                <Number>{following?.artists.total}</Number>
                <NumLabel>following</NumLabel>
              </Stat>
              <Stat>
                <Link to={PageRoutes.PLAYLISTS}>
                  <Number>{playlists?.total}</Number>
                  <NumLabel>playlists</NumLabel>
                </Link>
              </Stat>
            </Stats>
            <Logout />
          </Header>
          <Preview>
            <div>
              <PreviewHeading>
                <h3>Top Artists of All Time</h3>
                <Link to={PageRoutes.ARTISTS}>
                  <SeeMoreButton>see more</SeeMoreButton>
                </Link>
              </PreviewHeading>
              <ItemsList>
                <ArtistItem />
              </ItemsList>
            </div>
            <div>
              <PreviewHeading>
                <h3>Top Tracks of All Time</h3>
                <Link to={PageRoutes.TRACKS}>
                  <SeeMoreButton>see more</SeeMoreButton>
                </Link>
              </PreviewHeading>
              <ItemsList>
                <TrackItem />
              </ItemsList>
            </div>
          </Preview>
        </Main>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default User;