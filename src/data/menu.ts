import { PageRoutes } from '../constants';
import { 
  UserIcon,
  MicrophoneIcon,
  MusicIcon,
  TimeIcon,
  PlaylistIcon 
} from '../assets';

export const menu = [
  {
    id: 1,
    title: 'Profile',
    path: PageRoutes.ROOT,
    icon: UserIcon,
  },
  {
    id: 2,
    title: 'Top Artists',
    path: PageRoutes.ARTISTS,
    icon: MicrophoneIcon,
  },
  {
    id: 3,
    title: 'Top Tracks',
    path: PageRoutes.TRACKS,
    icon: MusicIcon,
  },
  {
    id: 4,
    title: 'Recent',
    path: PageRoutes.RECENT,
    icon: TimeIcon,
  },
  {
    id: 5,
    title: 'Playlists',
    path: PageRoutes.PLAYLISTS,
    icon: PlaylistIcon,
  },
]