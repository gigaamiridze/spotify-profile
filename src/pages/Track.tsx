import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { ITrack, IAudioAnalysis, IAudioFeatures } from '../interfaces';
import { TrackContainer } from '../components';

function Track() {
  const { trackId } = useParams();
  const { setActiveItem } = useMenuItem();
  const [track, setTrack] = useState<ITrack | null>(null);
  const [audioAnalysis, setAudioAnalysis] = useState<IAudioAnalysis | null>(null);
  const [audioFeatures, setAudioFeatures] = useState<IAudioFeatures | null>(null);

  useEffect(() => {
    setActiveItem(null);
  }, []);

  return (
    <TrackContainer>
      Track ID: {trackId}
    </TrackContainer>
  )
}

export default Track;
