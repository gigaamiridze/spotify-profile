import { IArtist } from './Artist';

export interface IFollowing {
  artists: IFollowingArtists;
}

interface IFollowingArtists {
  items: IArtist[];
  href: string;
  limit: number;
  total: number;
}
