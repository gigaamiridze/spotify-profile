import { ISpotifyGeneral } from '../General';
import { IExternalUrls } from '../External';
import { ITrack } from './Track';

export interface IRecentlyPlayed {
  cursors: ICursors;
  href: string;
  items: IRecentlyPlayedItem[];
  limit: number;
  next: string;
}

interface ICursors {
  after: string;
  before: string;
}

interface IRecentlyPlayedItem {
  context: IContext;
  played_at: string;
  track: ITrack;
}

interface IContext extends ISpotifyGeneral {
  external_urls: IExternalUrls;
}
