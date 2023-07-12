import { Link } from 'react-router-dom';
import { InfoIcon, ArtistImg } from '../../assets';
import { Item, ItemArtwork, ItemImage, ItemName, Mask } from '../../components';

function ArtistItem() {
  return (
    <Link to='#'>
      <Item isArtistContent={true}>
        <ItemArtwork>
          <ItemImage
            isArtistContent={true}
            src={ArtistImg}
            alt='artist'
          />
          <Mask isArtistContent={true}>
            <InfoIcon />
          </Mask>
        </ItemArtwork>
        <ItemName>Justin Bieber</ItemName>
      </Item>
    </Link>
  )
}

export default ArtistItem;