import { ISpotifyGeneral } from '../General';
import { IExternalUrls } from '../External';
import { IImage } from '../Image';

export interface IPlaylist extends ISpotifyGeneral {
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

interface IPlaylistOwner extends ISpotifyGeneral {
  display_name: string;
  external_urls: IExternalUrls;
}

interface IPlaylistTracks {
  href: string;
  total: number;
}
