import { Routes, Route } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { User, TopArtists, TopTracks, RecentlyPlayed, Playlists } from '../pages';

function Router() {
  return (
    <Routes>
      <Route path={PageRoutes.ROOT} Component={User} />
      <Route path={PageRoutes.ARTISTS} Component={TopArtists} />
      <Route path={PageRoutes.TRACKS} Component={TopTracks} />
      <Route path={PageRoutes.RECENT} Component={RecentlyPlayed} />
      <Route path={PageRoutes.PLAYLISTS} Component={Playlists} />
    </Routes>
  )
}

export default Router;