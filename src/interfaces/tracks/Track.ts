import { IExternalUrls, IExternalIds } from '../External';
import { ISpotifyGeneral } from '../General';
import { IImage } from '../Image';

export interface ITrack extends ISpotifyGeneral {
  album: IAlbum;
  artists: ITrackArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: IExternalUrls;
  external_ids: IExternalIds;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
}

interface IAlbum extends ISpotifyGeneral {
  album_type: string;
  artists: ITrackArtist[];
  available_markets: string[];
  external_urls: IExternalUrls;
  images: IImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

interface ITrackArtist extends ISpotifyGeneral {
  name: string;
  external_urls: IExternalUrls;
}

export interface ITrackItemProps {
  track: ITrack;
}
