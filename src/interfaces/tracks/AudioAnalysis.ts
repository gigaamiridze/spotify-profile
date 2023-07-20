export interface IAudioAnalysis {
  bars: IAudio[];
  beats: IAudio[];
  meta: IMeta;
  sections: ISection[];
  segments: ISegment[];
  tatums: IAudio[];
  track: ITrack;
}

interface IAudio {
  start: number;
  duration: number;
  confidence: number;
}

interface IMeta {
  analysis_time: number;
  analyzer_version: string;
  detailed_status: string;
  input_process: string;
  platform: string;
  status_code: number;
  timestamp: number;
}

interface ISection extends IAudio {
  key: number;
  key_confidence: number;
  loudness: number;
  mode: number;
  mode_confidence: number;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

interface ISegment extends IAudio {
  loudness_end: number;
  loudness_max: number;
  loudness_max_time: number;
  loudness_start: number;
  pitches: number[];
  timbre: number[];
}

interface ITrack extends ISection {
  analysis_channels: number;
  analysis_sample_rate: number;
  code_version: number;
  codestring: string;
  duration: number;
  echoprint_version: number;
  echoprintstring: string;
  end_of_fade_in: number;
  num_samples: number;
  offset_seconds: number;
  rhythm_version: number;
  rhythmstring: string;
  sample_md5: string;
  start_of_fade_out: number;
  synch_version: number;
  synchstring: string;
  window_seconds: number;
}
