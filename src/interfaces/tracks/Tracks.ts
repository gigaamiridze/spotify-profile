import { ITrack } from './Track';

export interface ITracks {
  href: string;
  items: ITrack[];
  limit: number;
  total: number;
}
