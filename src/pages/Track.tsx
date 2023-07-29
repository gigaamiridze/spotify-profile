import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { Direction } from '../constants';
import { ITrack, IAudioAnalysis, IAudioFeatures } from '../interfaces';
import { getTrackInfo, getYear, formatDuration, parsePitchClass } from '../utils';
import { Loader, FeatureChart } from '../layouts';
import {
  TrackContainer, TopContainer, CoverImage,
  Info, TrackName, ArtistName, Album, GreenButton,
  AudioFeatures, Features, Feature, FeatureText, FeatureLabel
} from '../components';

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
          <TopContainer>
            <CoverImage src={track.album.images[0].url} alt='track cover image' />
            <Info>
              <TrackName>{track.name}</TrackName>
              <ArtistName>
                {track.artists.map(({ name }, index) => (
                  <span key={index}>
                    {name}
                    {track.artists.length > 0 && index === track.artists.length - 1 ? '' : ','}
                    &nbsp;
                  </span>
                ))}
              </ArtistName>
              <Album>
                <a
                  href={track.album.external_urls.spotify}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {track.album.name}
                </a>
                &nbsp;&middot;&nbsp;
                {getYear(track.album.release_date)}
              </Album>
              <a
                href={track.external_urls.spotify}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GreenButton>play on spotify</GreenButton>
              </a>
            </Info>
          </TopContainer>
          {audioAnalysis && audioFeatures && (
            <AudioFeatures>
              <Features>
                <Feature>
                  <FeatureText>{formatDuration(audioFeatures.duration_ms)}</FeatureText>
                  <FeatureLabel>Duration</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{parsePitchClass(audioFeatures.key)}</FeatureText>
                  <FeatureLabel>Key</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioFeatures.mode === 1 ? 'Major' : 'Minor'}</FeatureText>
                  <FeatureLabel>Modality</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioFeatures.time_signature}</FeatureText>
                  <FeatureLabel>Time Signature</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{Math.round(audioFeatures.tempo)}</FeatureText>
                  <FeatureLabel>Tempo (BPM)</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{track.popularity}%</FeatureText>
                  <FeatureLabel>Popularity</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioAnalysis.bars.length}</FeatureText>
                  <FeatureLabel>Bars</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioAnalysis.beats.length}</FeatureText>
                  <FeatureLabel>Beats</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioAnalysis.sections.length}</FeatureText>
                  <FeatureLabel>Sections</FeatureLabel>
                </Feature>
                <Feature>
                  <FeatureText>{audioAnalysis.segments.length}</FeatureText>
                  <FeatureLabel>Segments</FeatureLabel>
                </Feature>
              </Features>
              <FeatureChart features={audioFeatures} direction={Direction.VERTICAL} />
            </AudioFeatures>
          )}
        </TrackContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Track;
