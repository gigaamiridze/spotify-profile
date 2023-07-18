import { IArtist } from './Artist';

export interface IArtists {
  href: string;
  items: IArtist[];
  limit: number;
  total: number;
}
