import { Link } from 'react-router-dom';
import { InfoIcon } from '../../assets';
import { PageRoutes } from '../../constants';
import { IArtistItemProps } from '../../interfaces';
import { Item, ItemArtwork, ItemImage, ItemName, Mask } from '../../components';

function ArtistItem({ artist }: IArtistItemProps) {
  const { id, name, images } = artist;

  return (
    <Link to={`${PageRoutes.ARTISTS}/${id}`}>
      <Item isArtistContent={true}>
        <ItemArtwork>
          <ItemImage
            isArtistContent={true}
            src={images[2].url}
            alt={`${name}'s image`}
          />
          <Mask isArtistContent={true}>
            <InfoIcon />
          </Mask>
        </ItemArtwork>
        <ItemName>{name}</ItemName>
      </Item>
    </Link>
  )
}

export default ArtistItem;
