import { Link } from 'react-router-dom';
import { InfoIcon } from '../../assets';
import { PageRoutes } from '../../constants';
import { ITrackItemProps } from '../../interfaces';
import {
  Item, ItemArtwork, ItemImage, ItemName,
  Mask, ItemMeta, ItemGreyTitle
} from '../../components';

function TrackItem({ track }: ITrackItemProps) {
  const { id, name, album, artists, duration_ms } = track;

  return (
    <Link to={`${PageRoutes.TRACKS}/${id}`}>
      <Item isArtistContent={false}>
        <ItemArtwork>
          <ItemImage
            isArtistContent={false}
            src={album.images[2].url}
            alt='artist'
          />
          <Mask isArtistContent={false}>
            <InfoIcon />
          </Mask>
        </ItemArtwork>
        <ItemMeta>
          <div>
            <ItemName>{name}</ItemName>
            <ItemGreyTitle>
              {artists.map(({name}, index) => (
                <span key={index}>
                  {name}
                  {artists.length > 0 && index === track.artists.length - 1 ? '' : ','}&nbsp;
                </span>
              ))}
              &nbsp;&middot;&nbsp;&nbsp;
              {album.name}
            </ItemGreyTitle>
          </div>
          <ItemGreyTitle>3:13</ItemGreyTitle>
        </ItemMeta>
      </Item>
    </Link>
  )
}

export default TrackItem;
