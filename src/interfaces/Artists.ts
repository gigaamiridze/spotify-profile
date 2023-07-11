import { ISpotifyGeneral } from './General';
import { IExternalUrls } from './External';
import { IFollowers } from './Followers';
import { IImage } from './Image';

export interface IArtists {
  href: string;
  items: IArtistItem[];
  limit: number;
  total: number;
}

interface IArtistItem extends ISpotifyGeneral {
  external_urls: IExternalUrls;
  followers: IFollowers;
  images: IImage[];
  genres: string[];
  name: string;
  popularity: number;
}