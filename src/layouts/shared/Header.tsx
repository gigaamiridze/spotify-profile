import { IHeaderProps } from '../../interfaces';
import { HeaderContainer, HeaderTitle } from '../../components';

function Header(props: IHeaderProps) {
  const { title } = props;

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header;
