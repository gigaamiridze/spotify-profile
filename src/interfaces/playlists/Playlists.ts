import { IPlaylist } from './Playlist';

export interface IPlaylists {
  href: string;
  items: IPlaylist[];
  limit: number;
  total: number;
}

export interface TotalTracksProps {
  isPlaylistContent: boolean;
}
