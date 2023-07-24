import { IHeaderProps } from '../../interfaces';
import { HeaderContainer, HeaderTitle, Ranges, RangeButton } from '../../components';

function Header(props: IHeaderProps) {
  const { title } = props;

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Ranges>
        <RangeButton>
          <span>All Time</span>
        </RangeButton>
        <RangeButton>
          <span>Last 6 Months</span>
        </RangeButton>
        <RangeButton>
          <span>Last 4 Weeks</span>
        </RangeButton>
      </Ranges>
    </HeaderContainer>
  )
}

export default Header;
