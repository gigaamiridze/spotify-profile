import { ISpotifyGeneral } from '../General';

export interface IAudioFeatures extends ISpotifyGeneral {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  valence: string;
}

export interface IAudioFeaturesForTrack {
  audio_features: IAudioFeatures[];
}
