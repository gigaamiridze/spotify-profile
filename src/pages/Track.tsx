import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuItem } from '../contexts';
import { TrackContainer } from '../components';

function Track() {
  const { trackId } = useParams();
  const { setActiveItem } = useMenuItem();

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
