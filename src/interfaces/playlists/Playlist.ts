import { ISpotifyGeneral } from '../General';
import { IExternalUrls } from '../External';
import { ITrack } from '../tracks';
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
  tracks: IPlaylistTracks;
}

interface IPlaylistOwner extends ISpotifyGeneral {
  display_name: string;
  external_urls: IExternalUrls;
}

interface IPlaylistTracks {
  href: string;
  items: IPlaylistTrackItem[];
  limit: number;
  total: number;
}

interface IPlaylistTrackItem {
  added_at: string;
  added_by: IAddedBy;
  is_local: boolean;
  primary_color: string;
  track: ITrack;
}

interface IAddedBy extends ISpotifyGeneral {
  external_urls: IExternalUrls;
}
