import { Link } from 'react-router-dom';
import { InfoIcon, ArtistImg } from '../../assets';
import { 
  Item, ItemArtwork, ItemImage, ItemName, 
  Mask, ItemMeta, ItemGreyTitle 
} from '../../components';

function TrackItem() {
  return (
    <Link to='#'>
      <Item isArtistContent={false}>
        <ItemArtwork>
          <ItemImage
            isArtistContent={false}
            src={ArtistImg}
            alt='artist'
          />
          <Mask isArtistContent={false}>
            <InfoIcon />
          </Mask>
        </ItemArtwork>
        <ItemMeta>
          <div>
            <ItemName>Justin Bieber</ItemName>
            <ItemGreyTitle>Justin Bieber - Justice</ItemGreyTitle>
          </div>
          <ItemGreyTitle>3.13</ItemGreyTitle>
        </ItemMeta>
      </Item>
    </Link>
  )
}

export default TrackItem;