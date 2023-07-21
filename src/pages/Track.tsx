import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrackInfo } from '../utils';
import { useMenuItem } from '../contexts';
import { ITrack, IAudioAnalysis, IAudioFeatures } from '../interfaces';
import { Loader } from '../layouts';
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

  useEffect(() => {
    getTrackData();
  }, [trackId]);

  const getTrackData = async () => {
    if (trackId) {
      const { track, audioAnalysis, audioFeatures } = await getTrackInfo(trackId);

      setTrack(track);
      setAudioAnalysis(audioAnalysis);
      setAudioFeatures(audioFeatures);
    }
  }

  return (
    <>
      {track ? (
        <TrackContainer>
          Track Name: {track?.name}
        </TrackContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Track;
