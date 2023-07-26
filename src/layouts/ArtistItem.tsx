import { Link } from 'react-router-dom';
import { InfoIcon } from '../assets';
import { PageRoutes } from '../constants';
import { IArtistItemProps } from '../interfaces';
import { Item, ItemArtwork, ItemImage, ItemName, Mask } from '../components';

function ArtistItem({ artist, imageNum, isArtistContent }: IArtistItemProps) {
  const { id, name, images } = artist;

  return (
    <Link to={`${PageRoutes.HOST}/${PageRoutes.ARTIST}/${id}`}>
      <Item isArtistContent={true} isTopArtistsContent={isArtistContent}>
        <ItemArtwork isArtistContent={isArtistContent}>
          <ItemImage
            isArtistContent={true}
            src={images[imageNum].url}
            alt={`${name}'s image`}
          />
          <Mask isArtistContent={true}>
            <InfoIcon />
          </Mask>
        </ItemArtwork>
        <ItemName isArtistContent={isArtistContent}>{name}</ItemName>
      </Item>
    </Link>
  )
}

export default ArtistItem;
