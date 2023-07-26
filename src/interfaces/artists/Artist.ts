import { ISpotifyGeneral } from '../General';
import { IExternalUrls } from '../External';
import { IFollowers } from '../follow';
import { IItemLayout } from '../Item';
import { IImage } from '../Image';

export interface IArtist extends ISpotifyGeneral {
  external_urls: IExternalUrls;
  followers: IFollowers;
  images: IImage[];
  genres: string[];
  name: string;
  popularity: number;
}

export interface IArtistItemProps extends IItemLayout {
  artist: IArtist;
  imageNum: number;
}
