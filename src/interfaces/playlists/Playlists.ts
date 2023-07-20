import { ISpotifyGeneral } from '../General';
import { IExternalUrls } from '../External';
import { IImage } from '../Image';

export interface IPlaylists {
  href: string;
  items: IPlaylistItem[];
  limit: number;
  total: number;
}

interface IPlaylistTracks {
  href: string;
  total: number;
}

interface IPlaylistOwner extends ISpotifyGeneral {
  display_name: string;
  external_urls: IExternalUrls;
}

interface IPlaylistItem extends ISpotifyGeneral {
  collaborative: boolean;
  description: string;
  external_urls: IExternalUrls;
  images: IImage[];
  name: string;
  owner: IPlaylistOwner;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  track: IPlaylistTracks;
}
