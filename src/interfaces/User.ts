import { ISpotifyGeneral } from './General';
import { IFollowers } from './Followers';
import { IExternalUrls } from './Url';
import { IImage } from './Image';

export interface IUser extends ISpotifyGeneral {
  country: string;
  display_name: string;
  email: string;
  explicit_content: IExplicitContent;
  external_urls: IExternalUrls;
  followers: IFollowers;
  images: IImage[];
  product: string;
}

interface IExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}