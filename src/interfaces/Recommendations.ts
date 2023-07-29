import { ISpotifyGeneral } from './General';
import { ITrack } from './tracks';

export interface IRecommendations {
  seeds: ISeed[];
  tracks: ITrack[];
}

interface ISeed extends ISpotifyGeneral {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  initialPoolSize: number;
}
